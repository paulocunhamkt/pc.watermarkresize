// <stdin>
import React, { useState, useRef } from "https://esm.sh/react@18.2.0";
import { Upload, Image as ImageIcon, Settings, Eye, Download, FileImage } from "https://esm.sh/lucide-react?deps=react@18.2.0,react-dom@18.2.0";
import JSZip from "https://esm.sh/jszip?deps=react@18.2.0,react-dom@18.2.0";
var WatermarkResizeApp = () => {
  const [images, setImages] = useState([]);
  const [watermark, setWatermark] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [imagesDimensions, setImagesDimensions] = useState({});
  const [config, setConfig] = useState({
    width: 1920,
    height: 1080,
    maintainAspect: true,
    position: "bottom-right",
    opacity: 0.7,
    watermarkSize: 20,
    shadowEnabled: false,
    shadowBlur: 5,
    shadowColor: "#000000",
    shadowOpacity: 0.5,
    shadowOffsetX: 2,
    shadowOffsetY: 2
  });
  const [previewMode, setPreviewMode] = useState("landscape");
  const imageInputRef = useRef(null);
  const watermarkInputRef = useRef(null);
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageId = Date.now() + Math.random();
        const imageData = {
          id: imageId,
          name: file.name,
          src: e.target.result,
          processed: false
        };
        const tempImg = new Image();
        tempImg.onload = () => {
          setImagesDimensions((prev) => ({
            ...prev,
            [imageId]: {
              width: tempImg.width,
              height: tempImg.height,
              isVertical: tempImg.height > tempImg.width
            }
          }));
        };
        tempImg.src = e.target.result;
        setImages((prev) => [...prev, imageData]);
      };
      reader.readAsDataURL(file);
    });
  };
  const handleWatermarkUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setWatermark({
          name: file.name,
          src: e.target.result
        });
      };
      reader.readAsDataURL(file);
    }
  };
  const getPositionStyle = (position) => {
    const positions = {
      "top-left": { top: "10px", left: "10px" },
      "top-right": { top: "10px", right: "10px" },
      "bottom-left": { bottom: "10px", left: "10px" },
      "bottom-right": { bottom: "10px", right: "10px" },
      "bottom-center": { bottom: "10px", left: "50%", transform: "translateX(-50%)" },
      "center": { top: "50%", left: "50%", transform: "translate(-50%, -50%)" }
    };
    return positions[position] || positions["bottom-right"];
  };
  const processImage = (imageData, watermarkData, config2, imageDimensions) => {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new window.Image();
      img.crossOrigin = "anonymous";
      img.onerror = () => reject(new Error("Erro ao carregar imagem"));
      img.onload = () => {
        let newWidth = config2.width;
        let newHeight = config2.height;
        const imageAspectRatio = img.width / img.height;
        if (config2.maintainAspect) {
          if (imageAspectRatio >= 1) {
            newHeight = Math.round(newWidth / imageAspectRatio);
          } else {
            newWidth = Math.round(newHeight * imageAspectRatio);
          }
        }
        canvas.width = newWidth;
        canvas.height = newHeight;
        let drawWidth, drawHeight, x, y;
        ctx.drawImage(img, 0, 0, newWidth, newHeight);
        if (watermarkData) {
          const watermarkImg = new window.Image();
          watermarkImg.crossOrigin = "anonymous";
          watermarkImg.onerror = () => reject(new Error("Erro ao carregar marca d'\xE1gua"));
          watermarkImg.onload = () => {
            const logoScaleFactor = config2.watermarkSize / 100;
            const logoReferenceWidth = config2.width;
            const logoAspectRatio = watermarkImg.width / watermarkImg.height;
            let logoWidth = logoReferenceWidth * logoScaleFactor;
            let logoHeight = logoWidth / logoAspectRatio;
            if (logoHeight > newHeight * 0.9) {
              logoHeight = newHeight * 0.9;
              logoWidth = logoHeight * logoAspectRatio;
            }
            if (logoWidth > newWidth * 0.9) {
              logoWidth = newWidth * 0.9;
              logoHeight = logoWidth / logoAspectRatio;
            }
            let watermarkX, watermarkY;
            const margin = 20;
            switch (config2.position) {
              case "top-left":
                watermarkX = margin;
                watermarkY = margin;
                break;
              case "top-right":
                watermarkX = newWidth - logoWidth - margin;
                watermarkY = margin;
                break;
              case "bottom-left":
                watermarkX = margin;
                watermarkY = newHeight - logoHeight - margin;
                break;
              case "bottom-right":
                watermarkX = newWidth - logoWidth - margin;
                watermarkY = newHeight - logoHeight - margin;
                break;
              case "bottom-center":
                watermarkX = (newWidth - logoWidth) / 2;
                watermarkY = newHeight - logoHeight - margin;
                break;
              case "center":
                watermarkX = (newWidth - logoWidth) / 2;
                watermarkY = (newHeight - logoHeight) / 2;
                break;
              default:
                watermarkX = newWidth - logoWidth - margin;
                watermarkY = newHeight - logoHeight - margin;
            }
            if (config2.shadowEnabled) {
              ctx.shadowColor = config2.shadowColor;
              ctx.shadowBlur = config2.shadowBlur;
              ctx.shadowOffsetX = config2.shadowOffsetX;
              ctx.shadowOffsetY = config2.shadowOffsetY;
              ctx.globalAlpha = config2.shadowOpacity;
              ctx.drawImage(watermarkImg, watermarkX, watermarkY, watermarkWidth, watermarkHeight);
              ctx.shadowColor = "transparent";
              ctx.shadowBlur = 0;
              ctx.shadowOffsetX = 0;
              ctx.shadowOffsetY = 0;
            }
            ctx.globalAlpha = config2.opacity;
            ctx.drawImage(watermarkImg, watermarkX, watermarkY, logoWidth, logoHeight);
            ctx.globalAlpha = 1;
            canvas.toBlob((blob) => {
              if (blob) {
                resolve(blob);
              } else {
                reject(new Error("Erro ao converter imagem"));
              }
            }, "image/jpeg", 0.9);
          };
          watermarkImg.src = watermarkData;
        } else {
          canvas.toBlob((blob) => {
            if (blob) {
              resolve(blob);
            } else {
              reject(new Error("Erro ao converter imagem"));
            }
          }, "image/jpeg", 0.9);
        }
      };
      img.src = imageData;
    });
  };
  const processImages = async () => {
    if (images.length === 0) {
      alert("Nenhuma imagem carregada para processar.");
      return;
    }
    setIsProcessing(true);
    try {
      const processedImages = [];
      for (let i = 0; i < images.length; i++) {
        const image = images[i];
        if (!image.src) {
          throw new Error(`Imagem ${image.name} n\xE3o est\xE1 dispon\xEDvel`);
        }
        const processedBlob = await processImage(
          image.src,
          watermark?.src,
          config,
          imagesDimensions[image.id]
        );
        processedImages.push({
          ...image,
          processed: true,
          processedBlob,
          processedUrl: URL.createObjectURL(processedBlob)
        });
        setImages((prev) => prev.map(
          (img, index) => index <= i ? processedImages[index] || img : img
        ));
      }
    } catch (error) {
      console.error("Erro ao processar imagens:", error);
      alert(`Erro ao processar imagens: ${error.message}. Verifique se as imagens s\xE3o v\xE1lidas e tente novamente.`);
    } finally {
      setIsProcessing(false);
    }
  };
  const downloadAll = async () => {
    const processedImages = images.filter((img) => img.processed && img.processedBlob);
    if (processedImages.length === 0) {
      alert("Nenhuma imagem processada para download.");
      return;
    }
    try {
      const zip = new JSZip();
      processedImages.forEach((image, index) => {
        const fileName = `processed_${image.name}`;
        zip.file(fileName, image.processedBlob);
      });
      const zipBlob = await zip.generateAsync({ type: "blob" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(zipBlob);
      link.download = `processed_images_${(/* @__PURE__ */ new Date()).getTime()}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error("Erro ao criar ZIP:", error);
      alert("Erro ao criar arquivo ZIP. Tente novamente.");
    }
  };
  return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-gray-50 p-6" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto" }, /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded-lg shadow-sm p-6 mb-6" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3 mb-2" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: "assets/N7adwwGfz_Wu_7ORSgQjs.png",
      alt: "Logo",
      className: "w-8 h-8 rounded"
    }
  ), /* @__PURE__ */ React.createElement("h1", { className: "text-xl font-bold text-gray-800 whitespace-nowrap" }, "PC WATERMARK RESIZE")), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600" }, "Redimensione e adicione sua marca d'\xE1gua em v\xE1rias imagens")), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-6" }, /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded-lg shadow-sm p-6" }, /* @__PURE__ */ React.createElement("h2", { className: "text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2" }, /* @__PURE__ */ React.createElement(Upload, { className: "w-5 h-5" }), "Carregar Arquivos"), /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => imageInputRef.current?.click(),
      className: "w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
    },
    /* @__PURE__ */ React.createElement(FileImage, { className: "w-5 h-5" }),
    "Carregar Imagens"
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => watermarkInputRef.current?.click(),
      className: "w-full bg-purple-100 text-purple-700 py-3 px-4 rounded-lg hover:bg-purple-200 transition-colors flex items-center justify-center gap-2"
    },
    /* @__PURE__ */ React.createElement(ImageIcon, { className: "w-5 h-5" }),
    "Carregar Marca D'\xE1gua"
  ), /* @__PURE__ */ React.createElement(
    "input",
    {
      ref: imageInputRef,
      type: "file",
      multiple: true,
      accept: "image/*",
      onChange: handleImageUpload,
      className: "hidden"
    }
  ), /* @__PURE__ */ React.createElement(
    "input",
    {
      ref: watermarkInputRef,
      type: "file",
      accept: "image/*",
      onChange: handleWatermarkUpload,
      className: "hidden"
    }
  )), watermark && /* @__PURE__ */ React.createElement("div", { className: "mt-3 p-3 bg-green-50 rounded-lg" }, /* @__PURE__ */ React.createElement("p", { className: "text-sm text-green-700" }, "\u2713 Marca d'\xE1gua: ", watermark.name))), /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded-lg shadow-sm p-6" }, /* @__PURE__ */ React.createElement("h2", { className: "text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2" }, /* @__PURE__ */ React.createElement(Settings, { className: "w-5 h-5" }), "Configurar"), /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-3" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-1" }, "Largura (px)"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "number",
      value: config.width,
      onChange: (e) => setConfig((prev) => ({ ...prev, width: parseInt(e.target.value) })),
      className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
    }
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-1" }, "Altura (px)"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "number",
      value: config.height,
      onChange: (e) => setConfig((prev) => ({ ...prev, height: parseInt(e.target.value) })),
      className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
    }
  ))), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "checkbox",
      id: "maintainAspect",
      checked: config.maintainAspect,
      onChange: (e) => setConfig((prev) => ({ ...prev, maintainAspect: e.target.checked })),
      className: "w-4 h-4 text-purple-600"
    }
  ), /* @__PURE__ */ React.createElement("label", { htmlFor: "maintainAspect", className: "text-sm text-gray-700" }, "Manter propor\xE7\xE3o (sem sobras)")), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-gray-500 ml-6" }, config.maintainAspect ? "Paisagem: altura ajustada proporcionalmente. Retrato: largura ajustada proporcionalmente." : "A imagem ser\xE1 esticada para caber exatamente nas dimens\xF5es definidas"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-2" }, "Posicionamento da Marca D'\xE1gua"), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-2 text-xs" }, [
    { value: "top-left", label: "Superior Esquerdo" },
    { value: "top-right", label: "Superior Direito" },
    { value: "bottom-left", label: "Inferior Esquerdo" },
    { value: "bottom-right", label: "Inferior Direito" },
    { value: "bottom-center", label: "Inferior Centro" },
    { value: "center", label: "Centro" }
  ].map((pos) => /* @__PURE__ */ React.createElement("label", { key: pos.value, className: "flex items-center gap-1" }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "radio",
      name: "position",
      value: pos.value,
      checked: config.position === pos.value,
      onChange: (e) => setConfig((prev) => ({ ...prev, position: e.target.value })),
      className: "w-3 h-3"
    }
  ), pos.label)))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-1" }, "Opacidade: ", Math.round(config.opacity * 100), "%"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "range",
      min: "0",
      max: "1",
      step: "0.1",
      value: config.opacity,
      onChange: (e) => setConfig((prev) => ({ ...prev, opacity: parseFloat(e.target.value) })),
      className: "w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer slider"
    }
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-1" }, "Tamanho da Marca: ", config.watermarkSize, "%"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "range",
      min: "5",
      max: "50",
      value: config.watermarkSize,
      onChange: (e) => setConfig((prev) => ({ ...prev, watermarkSize: parseInt(e.target.value) })),
      className: "w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "border-t pt-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 mb-3" }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "checkbox",
      id: "shadowEnabled",
      checked: config.shadowEnabled,
      onChange: (e) => setConfig((prev) => ({ ...prev, shadowEnabled: e.target.checked })),
      className: "w-4 h-4 text-purple-600"
    }
  ), /* @__PURE__ */ React.createElement("label", { htmlFor: "shadowEnabled", className: "text-sm font-medium text-gray-700" }, "Ativar Sombra na Logo")), config.shadowEnabled && /* @__PURE__ */ React.createElement("div", { className: "space-y-3 ml-6" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-1" }, "Desfoque: ", config.shadowBlur, "px"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "range",
      min: "0",
      max: "20",
      value: config.shadowBlur,
      onChange: (e) => setConfig((prev) => ({ ...prev, shadowBlur: parseInt(e.target.value) })),
      className: "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-3" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-1" }, "Deslocamento X: ", config.shadowOffsetX, "px"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "range",
      min: "-10",
      max: "10",
      value: config.shadowOffsetX,
      onChange: (e) => setConfig((prev) => ({ ...prev, shadowOffsetX: parseInt(e.target.value) })),
      className: "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
    }
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-1" }, "Deslocamento Y: ", config.shadowOffsetY, "px"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "range",
      min: "-10",
      max: "10",
      value: config.shadowOffsetY,
      onChange: (e) => setConfig((prev) => ({ ...prev, shadowOffsetY: parseInt(e.target.value) })),
      className: "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
    }
  ))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-1" }, "Opacidade da Sombra: ", Math.round(config.shadowOpacity * 100), "%"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "range",
      min: "0",
      max: "1",
      step: "0.1",
      value: config.shadowOpacity,
      onChange: (e) => setConfig((prev) => ({ ...prev, shadowOpacity: parseFloat(e.target.value) })),
      className: "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
    }
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-1" }, "Cor da Sombra"), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "color",
      value: config.shadowColor,
      onChange: (e) => setConfig((prev) => ({ ...prev, shadowColor: e.target.value })),
      className: "w-8 h-8 rounded border border-gray-300 cursor-pointer"
    }
  ), /* @__PURE__ */ React.createElement("span", { className: "text-xs text-gray-500" }, config.shadowColor)))))))), /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded-lg shadow-sm p-6" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between mb-4" }, /* @__PURE__ */ React.createElement("h2", { className: "text-lg font-semibold text-gray-800 flex items-center gap-2" }, /* @__PURE__ */ React.createElement(Eye, { className: "w-5 h-5" }), "Pr\xE9-visualiza\xE7\xE3o"), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setPreviewMode("landscape"),
      className: `px-3 py-1 text-xs rounded ${previewMode === "landscape" ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-700"}`
    },
    "Paisagem"
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setPreviewMode("portrait"),
      className: `px-3 py-1 text-xs rounded ${previewMode === "portrait" ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-700"}`
    },
    "Retrato"
  ))), /* @__PURE__ */ React.createElement("div", { className: "border-2 border-dashed border-purple-300 rounded-lg p-4 min-h-64 flex items-center justify-center" }, images.length > 0 ? /* @__PURE__ */ React.createElement("div", { className: "relative" }, (() => {
    const targetImage = previewMode === "landscape" ? images.find((img) => {
      const dims = imagesDimensions[img.id];
      return dims && !dims.isVertical;
    }) || images[0] : images.find((img) => {
      const dims = imagesDimensions[img.id];
      return dims && dims.isVertical;
    }) || images[0];
    const imageDims = imagesDimensions[targetImage.id];
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
      "div",
      {
        className: `relative bg-gray-100 border-2 border-gray-200 rounded ${previewMode === "landscape" ? "w-64 h-36" : "w-36 h-64"}`
      },
      /* @__PURE__ */ React.createElement(
        "img",
        {
          src: targetImage.processedUrl || targetImage.src,
          alt: "Preview",
          className: "w-full h-full object-contain bg-white rounded"
        }
      ),
      watermark && !targetImage.processedUrl && /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "absolute",
          style: {
            ...getPositionStyle(config.position),
            opacity: config.opacity,
            width: `${config.watermarkSize}%`,
            filter: config.shadowEnabled ? `drop-shadow(${config.shadowOffsetX}px ${config.shadowOffsetY}px ${config.shadowBlur}px ${config.shadowColor}${Math.round(config.shadowOpacity * 255).toString(16).padStart(2, "0")})` : "none"
          }
        },
        /* @__PURE__ */ React.createElement(
          "img",
          {
            src: watermark.src,
            alt: "Watermark",
            className: "w-full h-auto"
          }
        )
      )
    ), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-gray-600 text-center mt-2" }, "Base: ", config.width, " x ", config.height, "px \u2022 ", previewMode === "landscape" ? "Paisagem" : "Retrato", imageDims && /* @__PURE__ */ React.createElement("span", { className: "text-gray-500 ml-2" }, "(Original: ", imageDims.width, "x", imageDims.height, ")"), targetImage.processed && /* @__PURE__ */ React.createElement("span", { className: "text-green-600 ml-2" }, "\u2713 Processada")));
  })()) : /* @__PURE__ */ React.createElement("div", { className: "text-center text-gray-500" }, /* @__PURE__ */ React.createElement(ImageIcon, { className: "w-12 h-12 mx-auto mb-2 opacity-50" }), /* @__PURE__ */ React.createElement("p", null, "Carregue uma imagem para ver a pr\xE9-visualiza\xE7\xE3o")))), /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded-lg shadow-sm p-6" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between mb-4" }, /* @__PURE__ */ React.createElement("h2", { className: "text-lg font-semibold text-gray-800" }, "Suas Imagens (", images.length, ")"), images.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "flex gap-2" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: processImages,
      disabled: isProcessing || images.length === 0,
      className: "bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
    },
    isProcessing ? "Processando..." : "Processar"
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: downloadAll,
      disabled: !images.some((img) => img.processed),
      className: "bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors flex items-center gap-1 disabled:bg-gray-400 disabled:cursor-not-allowed"
    },
    /* @__PURE__ */ React.createElement(Download, { className: "w-4 h-4" }),
    "Baixar ZIP"
  ))), /* @__PURE__ */ React.createElement("div", { className: "space-y-3 max-h-96 overflow-y-auto" }, images.length === 0 ? /* @__PURE__ */ React.createElement("div", { className: "text-center text-gray-500 py-8" }, /* @__PURE__ */ React.createElement(FileImage, { className: "w-12 h-12 mx-auto mb-2 opacity-50" }), /* @__PURE__ */ React.createElement("p", null, "Nenhuma imagem carregada"), /* @__PURE__ */ React.createElement("p", { className: "text-sm" }, "Fa\xE7a upload das suas imagens")) : images.map((image, index) => /* @__PURE__ */ React.createElement(
    "div",
    {
      key: image.id,
      className: `flex items-center gap-3 p-3 rounded-lg border ${image.processed ? "bg-green-50 border-green-200" : "bg-gray-50 border-gray-200"}`
    },
    /* @__PURE__ */ React.createElement("div", { className: "w-12 h-12 bg-purple-100 rounded flex items-center justify-center" }, /* @__PURE__ */ React.createElement(FileImage, { className: "w-6 h-6 text-purple-600" })),
    /* @__PURE__ */ React.createElement("div", { className: "flex-1 min-w-0" }, /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium text-gray-800 truncate" }, image.name), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-gray-500" }, image.processed ? "Processada \u2713" : isProcessing ? "Processando..." : "Aguardando", imagesDimensions[image.id] && /* @__PURE__ */ React.createElement("span", { className: "ml-2" }, "\u2022 ", imagesDimensions[image.id].width, "x", imagesDimensions[image.id].height, imagesDimensions[image.id].isVertical ? " (Retrato)" : " (Paisagem)"))),
    image.processed && /* @__PURE__ */ React.createElement("div", { className: "w-4 h-4 bg-green-500 rounded-full flex items-center justify-center" }, /* @__PURE__ */ React.createElement("div", { className: "w-2 h-2 bg-white rounded-full" }))
  ))))), /* @__PURE__ */ React.createElement("div", { className: "mt-8 text-center" }, /* @__PURE__ */ React.createElement("p", { className: "text-sm text-gray-500" }, "\xA9 2025 PauloCunhaMKT Solu\xE7\xF5es TI \u2022 v1.1.0"))));
};
var stdin_default = WatermarkResizeApp;
export {
  stdin_default as default
};
