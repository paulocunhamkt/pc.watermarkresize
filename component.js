// <stdin>
import React, { useState, useRef } from "https://esm.sh/react@18.2.0";
import { Upload, Image as ImageIcon, Settings, Eye, Download, FileImage, Globe } from "https://esm.sh/lucide-react?deps=react@18.2.0,react-dom@18.2.0";
import JSZip from "https://esm.sh/jszip?deps=react@18.2.0,react-dom@18.2.0";
var languages = {
  pt: {
    code: "pt",
    name: "Portugu\xEAs",
    flag: "\u{1F1E7}\u{1F1F7}",
    translations: {
      // Header
      appTitle: "MarkResize",
      appSubtitle: "Redimensione e adicione sua marca d'\xE1gua em v\xE1rias imagens",
      // Upload Section
      uploadFiles: "Carregar Arquivos",
      uploadImages: "Carregar Imagens",
      uploadWatermark: "Carregar Marca D'\xE1gua",
      watermarkTypes: {
        image: "Imagem",
        text: "Texto",
        pattern: "Padr\xE3o"
      },
      // Text Watermark
      textLabel: "Texto da Marca",
      textPlaceholder: "Digite o texto...",
      font: "Fonte",
      textSize: "Tamanho",
      textColor: "Cor do Texto",
      rotation: "Rota\xE7\xE3o",
      // Pattern
      patternText: "Texto do Padr\xE3o",
      patternPlaceholder: "SAMPLE",
      spacing: "Espa\xE7amento",
      // Configuration
      configure: "Configurar",
      width: "Largura (px)",
      height: "Altura (px)",
      maintainAspect: "Manter propor\xE7\xE3o (sem sobras)",
      aspectHelp: "Paisagem: altura ajustada proporcionalmente. Retrato: largura ajustada proporcionalmente.",
      aspectHelpOff: "A imagem ser\xE1 esticada para caber exatamente nas dimens\xF5es definidas",
      // Position
      positioning: "Posicionamento da Marca D'\xE1gua",
      positions: {
        "top-left": "Superior Esquerdo",
        "top-right": "Superior Direito",
        "bottom-left": "Inferior Esquerdo",
        "bottom-right": "Inferior Direito",
        "bottom-center": "Inferior Centro",
        "center": "Centro"
      },
      // Effects
      opacity: "Opacidade",
      watermarkSize: "Tamanho da Marca",
      shadowEffects: "Ativar Sombra na Logo",
      blur: "Desfoque",
      offsetX: "Deslocamento X",
      offsetY: "Deslocamento Y",
      shadowOpacity: "Opacidade da Sombra",
      shadowColor: "Cor da Sombra",
      // Preview
      preview: "Pr\xE9-visualiza\xE7\xE3o",
      landscape: "Paisagem",
      portrait: "Retrato",
      previewPlaceholder: "Carregue uma imagem para ver a pr\xE9-visualiza\xE7\xE3o",
      // Images List
      yourImages: "Suas Imagens",
      process: "Processar",
      processing: "Processando...",
      downloadZip: "Baixar ZIP",
      noImages: "Nenhuma imagem carregada",
      uploadImagesHint: "Fa\xE7a upload das suas imagens",
      // Status
      processed: "Processada \u2713",
      waiting: "Aguardando",
      // Messages
      watermarkSuccess: "\u2713 Marca d'\xE1gua:",
      textSuccess: "\u2713 Texto:",
      noImagesToProcess: "Nenhuma imagem carregada para processar.",
      selectWatermarkImage: "Selecione uma imagem para marca d'\xE1gua ou use o modo de texto.",
      enterWatermarkText: "Digite um texto para a marca d'\xE1gua.",
      noProcessedImages: "Nenhuma imagem processada para download.",
      // Footer
      footer: "\xA9 2025 PauloCunhaMKT Solu\xE7\xF5es TI \u2022 v1.1.0",
      // Dimensions
      base: "Base",
      original: "Original"
    }
  },
  en: {
    code: "en",
    name: "English",
    flag: "\u{1F1FA}\u{1F1F8}",
    translations: {
      // Header
      appTitle: "MarkResize",
      appSubtitle: "Resize and add watermarks to multiple images",
      // Upload Section
      uploadFiles: "Upload Files",
      uploadImages: "Upload Images",
      uploadWatermark: "Upload Watermark",
      watermarkTypes: {
        image: "Image",
        text: "Text",
        pattern: "Pattern"
      },
      // Text Watermark
      textLabel: "Watermark Text",
      textPlaceholder: "Enter text...",
      font: "Font",
      textSize: "Size",
      textColor: "Text Color",
      rotation: "Rotation",
      // Pattern
      patternText: "Pattern Text",
      patternPlaceholder: "SAMPLE",
      spacing: "Spacing",
      // Configuration
      configure: "Configure",
      width: "Width (px)",
      height: "Height (px)",
      maintainAspect: "Maintain aspect ratio (no crop)",
      aspectHelp: "Landscape: height adjusted proportionally. Portrait: width adjusted proportionally.",
      aspectHelpOff: "Image will be stretched to fit exactly the defined dimensions",
      // Position
      positioning: "Watermark Positioning",
      positions: {
        "top-left": "Top Left",
        "top-right": "Top Right",
        "bottom-left": "Bottom Left",
        "bottom-right": "Bottom Right",
        "bottom-center": "Bottom Center",
        "center": "Center"
      },
      // Effects
      opacity: "Opacity",
      watermarkSize: "Watermark Size",
      shadowEffects: "Enable Logo Shadow",
      blur: "Blur",
      offsetX: "X Offset",
      offsetY: "Y Offset",
      shadowOpacity: "Shadow Opacity",
      shadowColor: "Shadow Color",
      // Preview
      preview: "Preview",
      landscape: "Landscape",
      portrait: "Portrait",
      previewPlaceholder: "Upload an image to see preview",
      // Images List
      yourImages: "Your Images",
      process: "Process",
      processing: "Processing...",
      downloadZip: "Download ZIP",
      noImages: "No images uploaded",
      uploadImagesHint: "Upload your images",
      // Status
      processed: "Processed \u2713",
      waiting: "Waiting",
      // Messages
      watermarkSuccess: "\u2713 Watermark:",
      textSuccess: "\u2713 Text:",
      noImagesToProcess: "No images loaded to process.",
      selectWatermarkImage: "Select a watermark image or use text mode.",
      enterWatermarkText: "Enter text for the watermark.",
      noProcessedImages: "No processed images to download.",
      // Footer
      footer: "\xA9 2025 PauloCunhaMKT Tech Solutions \u2022 v1.1.0",
      // Dimensions
      base: "Base",
      original: "Original"
    }
  },
  es: {
    code: "es",
    name: "Espa\xF1ol",
    flag: "\u{1F1EA}\u{1F1F8}",
    translations: {
      // Header
      appTitle: "MarkResize",
      appSubtitle: "Redimensiona y a\xF1ade marcas de agua a m\xFAltiples im\xE1genes",
      // Upload Section
      uploadFiles: "Subir Archivos",
      uploadImages: "Subir Im\xE1genes",
      uploadWatermark: "Subir Marca de Agua",
      watermarkTypes: {
        image: "Imagen",
        text: "Texto",
        pattern: "Patr\xF3n"
      },
      // Text Watermark
      textLabel: "Texto de Marca",
      textPlaceholder: "Ingrese texto...",
      font: "Fuente",
      textSize: "Tama\xF1o",
      textColor: "Color del Texto",
      rotation: "Rotaci\xF3n",
      // Pattern
      patternText: "Texto del Patr\xF3n",
      patternPlaceholder: "MUESTRA",
      spacing: "Espaciado",
      // Configuration
      configure: "Configurar",
      width: "Ancho (px)",
      height: "Alto (px)",
      maintainAspect: "Mantener proporci\xF3n (sin recorte)",
      aspectHelp: "Paisaje: altura ajustada proporcionalmente. Retrato: ancho ajustado proporcionalmente.",
      aspectHelpOff: "La imagen se estirar\xE1 para ajustarse exactamente a las dimensiones definidas",
      // Position
      positioning: "Posicionamiento de Marca de Agua",
      positions: {
        "top-left": "Superior Izquierda",
        "top-right": "Superior Derecha",
        "bottom-left": "Inferior Izquierda",
        "bottom-right": "Inferior Derecha",
        "bottom-center": "Inferior Centro",
        "center": "Centro"
      },
      // Effects
      opacity: "Opacidad",
      watermarkSize: "Tama\xF1o de Marca",
      shadowEffects: "Activar Sombra del Logo",
      blur: "Desenfoque",
      offsetX: "Desplazamiento X",
      offsetY: "Desplazamiento Y",
      shadowOpacity: "Opacidad de Sombra",
      shadowColor: "Color de Sombra",
      // Preview
      preview: "Vista Previa",
      landscape: "Paisaje",
      portrait: "Retrato",
      previewPlaceholder: "Sube una imagen para ver la vista previa",
      // Images List
      yourImages: "Tus Im\xE1genes",
      process: "Procesar",
      processing: "Procesando...",
      downloadZip: "Descargar ZIP",
      noImages: "No hay im\xE1genes subidas",
      uploadImagesHint: "Sube tus im\xE1genes",
      // Status
      processed: "Procesada \u2713",
      waiting: "Esperando",
      // Messages
      watermarkSuccess: "\u2713 Marca de agua:",
      textSuccess: "\u2713 Texto:",
      noImagesToProcess: "No hay im\xE1genes cargadas para procesar.",
      selectWatermarkImage: "Selecciona una imagen de marca de agua o usa el modo texto.",
      enterWatermarkText: "Ingresa texto para la marca de agua.",
      noProcessedImages: "No hay im\xE1genes procesadas para descargar.",
      // Footer
      footer: "\xA9 2025 PauloCunhaMKT Soluciones TI \u2022 v1.1.0",
      // Dimensions
      base: "Base",
      original: "Original"
    }
  }
};
var WatermarkResizeApp = () => {
  const [images, setImages] = useState([]);
  const [watermark, setWatermark] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [imagesDimensions, setImagesDimensions] = useState({});
  const [currentLanguage, setCurrentLanguage] = useState("pt");
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
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
    shadowOffsetY: 2,
    // Novas configurações para texto e padrão
    watermarkType: "image",
    // 'image' ou 'text' ou 'pattern'
    textWatermark: "SAMPLE",
    textFont: "Arial",
    textSize: 48,
    textColor: "#000000",
    textRotation: -45,
    patternSpacing: 200,
    patternEnabled: false
  });
  const [previewMode, setPreviewMode] = useState("landscape");
  const imageInputRef = useRef(null);
  const watermarkInputRef = useRef(null);
  const t = (key) => {
    const keys = key.split(".");
    let value = languages[currentLanguage].translations;
    for (const k of keys) {
      value = value[k];
      if (!value) return key;
    }
    return value;
  };
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
        ctx.drawImage(img, 0, 0, newWidth, newHeight);
        if (config2.watermarkType === "text" && config2.textWatermark) {
          ctx.save();
          ctx.font = `${config2.textSize}px ${config2.textFont}`;
          ctx.fillStyle = config2.textColor;
          ctx.globalAlpha = config2.opacity;
          if (config2.shadowEnabled) {
            ctx.shadowColor = config2.shadowColor;
            ctx.shadowBlur = config2.shadowBlur;
            ctx.shadowOffsetX = config2.shadowOffsetX;
            ctx.shadowOffsetY = config2.shadowOffsetY;
          }
          const textMetrics = ctx.measureText(config2.textWatermark);
          const textWidth = textMetrics.width;
          const textHeight = config2.textSize;
          let textX, textY;
          const margin = 20;
          switch (config2.position) {
            case "top-left":
              textX = margin;
              textY = margin + textHeight;
              break;
            case "top-right":
              textX = newWidth - textWidth - margin;
              textY = margin + textHeight;
              break;
            case "bottom-left":
              textX = margin;
              textY = newHeight - margin;
              break;
            case "bottom-right":
              textX = newWidth - textWidth - margin;
              textY = newHeight - margin;
              break;
            case "bottom-center":
              textX = (newWidth - textWidth) / 2;
              textY = newHeight - margin;
              break;
            case "center":
              textX = (newWidth - textWidth) / 2;
              textY = (newHeight + textHeight) / 2;
              break;
            default:
              textX = newWidth - textWidth - margin;
              textY = newHeight - margin;
          }
          if (config2.textRotation !== 0) {
            ctx.translate(textX + textWidth / 2, textY - textHeight / 2);
            ctx.rotate(config2.textRotation * Math.PI / 180);
            ctx.fillText(config2.textWatermark, -textWidth / 2, textHeight / 4);
          } else {
            ctx.fillText(config2.textWatermark, textX, textY);
          }
          ctx.restore();
        } else if (config2.watermarkType === "pattern" && config2.textWatermark) {
          ctx.save();
          ctx.font = `${config2.textSize}px ${config2.textFont}`;
          ctx.fillStyle = config2.textColor;
          ctx.globalAlpha = config2.opacity;
          if (config2.shadowEnabled) {
            ctx.shadowColor = config2.shadowColor;
            ctx.shadowBlur = config2.shadowBlur;
            ctx.shadowOffsetX = config2.shadowOffsetX;
            ctx.shadowOffsetY = config2.shadowOffsetY;
          }
          const spacing = config2.patternSpacing;
          const diagonal = Math.sqrt(newWidth * newWidth + newHeight * newHeight);
          for (let i = -diagonal; i < diagonal; i += spacing) {
            for (let j = -diagonal; j < diagonal; j += spacing) {
              ctx.save();
              ctx.translate(i, j);
              ctx.rotate(config2.textRotation * Math.PI / 180);
              ctx.fillText(config2.textWatermark, 0, 0);
              ctx.restore();
            }
          }
          ctx.restore();
        } else if (watermarkData && config2.watermarkType === "image") {
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
              ctx.drawImage(watermarkImg, watermarkX, watermarkY, logoWidth, logoHeight);
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
        }
        if (config2.watermarkType === "text" || config2.watermarkType === "pattern" || !watermarkData) {
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
      alert(t("noImagesToProcess"));
      return;
    }
    if (config.watermarkType === "image" && !watermark) {
      alert(t("selectWatermarkImage"));
      return;
    }
    if ((config.watermarkType === "text" || config.watermarkType === "pattern") && !config.textWatermark.trim()) {
      alert(t("enterWatermarkText"));
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
      alert(t("noProcessedImages"));
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
  return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-gray-50 p-6" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto" }, /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded-lg shadow-sm p-6 mb-6" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between mb-2" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: "assets/vxiUCCZsIArK5m9Z9JAQN.png",
      alt: "Logo",
      className: "w-8 h-8 rounded"
    }
  ), /* @__PURE__ */ React.createElement("h1", { className: "text-xl font-bold text-gray-800 whitespace-nowrap" }, t("appTitle"))), /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setShowLanguageDropdown(!showLanguageDropdown),
      className: "flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
    },
    /* @__PURE__ */ React.createElement(Globe, { className: "w-4 h-4" }),
    /* @__PURE__ */ React.createElement("span", null, languages[currentLanguage].flag),
    /* @__PURE__ */ React.createElement("span", { className: "text-sm font-medium" }, languages[currentLanguage].name)
  ), showLanguageDropdown && /* @__PURE__ */ React.createElement("div", { className: "absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-40" }, Object.values(languages).map((lang) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: lang.code,
      onClick: () => {
        setCurrentLanguage(lang.code);
        setShowLanguageDropdown(false);
      },
      className: `w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors ${currentLanguage === lang.code ? "bg-purple-50 text-purple-700" : "text-gray-700"}`
    },
    /* @__PURE__ */ React.createElement("span", { className: "text-lg" }, lang.flag),
    /* @__PURE__ */ React.createElement("span", { className: "text-sm font-medium" }, lang.name),
    currentLanguage === lang.code && /* @__PURE__ */ React.createElement("span", { className: "ml-auto text-purple-600" }, "\u2713")
  ))))), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600" }, t("appSubtitle"))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-6" }, /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded-lg shadow-sm p-6" }, /* @__PURE__ */ React.createElement("h2", { className: "text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2" }, /* @__PURE__ */ React.createElement(Upload, { className: "w-5 h-5" }), t("uploadFiles")), /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => imageInputRef.current?.click(),
      className: "w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
    },
    /* @__PURE__ */ React.createElement(FileImage, { className: "w-5 h-5" }),
    t("uploadImages")
  ), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-3 gap-2" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setConfig((prev) => ({ ...prev, watermarkType: "image" })),
      className: `px-3 py-2 text-xs rounded transition-colors ${config.watermarkType === "image" ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`
    },
    t("watermarkTypes.image")
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setConfig((prev) => ({ ...prev, watermarkType: "text" })),
      className: `px-3 py-2 text-xs rounded transition-colors ${config.watermarkType === "text" ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`
    },
    t("watermarkTypes.text")
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setConfig((prev) => ({ ...prev, watermarkType: "pattern" })),
      className: `px-3 py-2 text-xs rounded transition-colors ${config.watermarkType === "pattern" ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`
    },
    t("watermarkTypes.pattern")
  )), config.watermarkType === "image" && /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => watermarkInputRef.current?.click(),
      className: "w-full bg-purple-100 text-purple-700 py-3 px-4 rounded-lg hover:bg-purple-200 transition-colors flex items-center justify-center gap-2"
    },
    /* @__PURE__ */ React.createElement(ImageIcon, { className: "w-5 h-5" }),
    t("uploadWatermark")
  )), /* @__PURE__ */ React.createElement(
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
  )), config.watermarkType === "text" && /* @__PURE__ */ React.createElement("div", { className: "mt-3 space-y-3" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-1" }, t("textLabel")), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      value: config.textWatermark,
      onChange: (e) => setConfig((prev) => ({ ...prev, textWatermark: e.target.value })),
      placeholder: t("textPlaceholder"),
      className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-3" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-1" }, t("font")), /* @__PURE__ */ React.createElement(
    "select",
    {
      value: config.textFont,
      onChange: (e) => setConfig((prev) => ({ ...prev, textFont: e.target.value })),
      className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
    },
    /* @__PURE__ */ React.createElement("option", { value: "Arial" }, "Arial"),
    /* @__PURE__ */ React.createElement("option", { value: "Arial Black" }, "Arial Black"),
    /* @__PURE__ */ React.createElement("option", { value: "Helvetica" }, "Helvetica"),
    /* @__PURE__ */ React.createElement("option", { value: "Times New Roman" }, "Times"),
    /* @__PURE__ */ React.createElement("option", { value: "Verdana" }, "Verdana"),
    /* @__PURE__ */ React.createElement("option", { value: "Impact" }, "Impact")
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-1" }, t("textSize"), ": ", config.textSize, "px"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "range",
      min: "12",
      max: "120",
      value: config.textSize,
      onChange: (e) => setConfig((prev) => ({ ...prev, textSize: parseInt(e.target.value) })),
      className: "w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
    }
  ))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-3" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-1" }, t("textColor")), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "color",
      value: config.textColor,
      onChange: (e) => setConfig((prev) => ({ ...prev, textColor: e.target.value })),
      className: "w-8 h-8 rounded border border-gray-300 cursor-pointer"
    }
  ), /* @__PURE__ */ React.createElement("span", { className: "text-xs text-gray-500" }, config.textColor))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-1" }, t("rotation"), ": ", config.textRotation, "\xB0"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "range",
      min: "-90",
      max: "90",
      value: config.textRotation,
      onChange: (e) => setConfig((prev) => ({ ...prev, textRotation: parseInt(e.target.value) })),
      className: "w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
    }
  )))), config.watermarkType === "pattern" && /* @__PURE__ */ React.createElement("div", { className: "mt-3 space-y-3" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-1" }, t("patternText")), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      value: config.textWatermark,
      onChange: (e) => setConfig((prev) => ({ ...prev, textWatermark: e.target.value })),
      placeholder: t("patternPlaceholder"),
      className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
    }
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-1" }, t("spacing"), ": ", config.patternSpacing, "px"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "range",
      min: "100",
      max: "400",
      value: config.patternSpacing,
      onChange: (e) => setConfig((prev) => ({ ...prev, patternSpacing: parseInt(e.target.value) })),
      className: "w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-3" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-1" }, t("textSize"), ": ", config.textSize, "px"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "range",
      min: "24",
      max: "80",
      value: config.textSize,
      onChange: (e) => setConfig((prev) => ({ ...prev, textSize: parseInt(e.target.value) })),
      className: "w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
    }
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-1" }, t("textColor")), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "color",
      value: config.textColor,
      onChange: (e) => setConfig((prev) => ({ ...prev, textColor: e.target.value })),
      className: "w-8 h-8 rounded border border-gray-300 cursor-pointer"
    }
  )))), watermark && config.watermarkType === "image" && /* @__PURE__ */ React.createElement("div", { className: "mt-3 p-3 bg-green-50 rounded-lg" }, /* @__PURE__ */ React.createElement("p", { className: "text-sm text-green-700" }, t("watermarkSuccess"), " ", watermark.name)), (config.watermarkType === "text" || config.watermarkType === "pattern") && config.textWatermark && /* @__PURE__ */ React.createElement("div", { className: "mt-3 p-3 bg-green-50 rounded-lg" }, /* @__PURE__ */ React.createElement("p", { className: "text-sm text-green-700" }, t("textSuccess"), ' "', config.textWatermark, '"'))), /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded-lg shadow-sm p-6" }, /* @__PURE__ */ React.createElement("h2", { className: "text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2" }, /* @__PURE__ */ React.createElement(Settings, { className: "w-5 h-5" }), t("configure")), /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-3" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-1" }, t("width")), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "number",
      value: config.width,
      onChange: (e) => setConfig((prev) => ({ ...prev, width: parseInt(e.target.value) })),
      className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
    }
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-1" }, t("height")), /* @__PURE__ */ React.createElement(
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
  ), /* @__PURE__ */ React.createElement("label", { htmlFor: "maintainAspect", className: "text-sm text-gray-700" }, t("maintainAspect"))), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-gray-500 ml-6" }, config.maintainAspect ? t("aspectHelp") : t("aspectHelpOff")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-2" }, t("positioning")), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-2 text-xs" }, [
    { value: "top-left", label: t("positions.top-left") },
    { value: "top-right", label: t("positions.top-right") },
    { value: "bottom-left", label: t("positions.bottom-left") },
    { value: "bottom-right", label: t("positions.bottom-right") },
    { value: "bottom-center", label: t("positions.bottom-center") },
    { value: "center", label: t("positions.center") }
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
  ), pos.label)))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-1" }, t("opacity"), ": ", Math.round(config.opacity * 100), "%"), /* @__PURE__ */ React.createElement(
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
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-1" }, t("watermarkSize"), ": ", config.watermarkSize, "%"), /* @__PURE__ */ React.createElement(
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
  ), /* @__PURE__ */ React.createElement("label", { htmlFor: "shadowEnabled", className: "text-sm font-medium text-gray-700" }, t("shadowEffects"))), config.shadowEnabled && /* @__PURE__ */ React.createElement("div", { className: "space-y-3 ml-6" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-1" }, t("blur"), ": ", config.shadowBlur, "px"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "range",
      min: "0",
      max: "20",
      value: config.shadowBlur,
      onChange: (e) => setConfig((prev) => ({ ...prev, shadowBlur: parseInt(e.target.value) })),
      className: "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-3" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-1" }, t("offsetX"), ": ", config.shadowOffsetX, "px"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "range",
      min: "-10",
      max: "10",
      value: config.shadowOffsetX,
      onChange: (e) => setConfig((prev) => ({ ...prev, shadowOffsetX: parseInt(e.target.value) })),
      className: "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
    }
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-1" }, t("offsetY"), ": ", config.shadowOffsetY, "px"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "range",
      min: "-10",
      max: "10",
      value: config.shadowOffsetY,
      onChange: (e) => setConfig((prev) => ({ ...prev, shadowOffsetY: parseInt(e.target.value) })),
      className: "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
    }
  ))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-1" }, t("shadowOpacity"), ": ", Math.round(config.shadowOpacity * 100), "%"), /* @__PURE__ */ React.createElement(
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
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-1" }, t("shadowColor")), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "color",
      value: config.shadowColor,
      onChange: (e) => setConfig((prev) => ({ ...prev, shadowColor: e.target.value })),
      className: "w-8 h-8 rounded border border-gray-300 cursor-pointer"
    }
  ), /* @__PURE__ */ React.createElement("span", { className: "text-xs text-gray-500" }, config.shadowColor)))))))), /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded-lg shadow-sm p-6" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between mb-4" }, /* @__PURE__ */ React.createElement("h2", { className: "text-lg font-semibold text-gray-800 flex items-center gap-2" }, /* @__PURE__ */ React.createElement(Eye, { className: "w-5 h-5" }), t("preview")), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setPreviewMode("landscape"),
      className: `px-3 py-1 text-xs rounded ${previewMode === "landscape" ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-700"}`
    },
    t("landscape")
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setPreviewMode("portrait"),
      className: `px-3 py-1 text-xs rounded ${previewMode === "portrait" ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-700"}`
    },
    t("portrait")
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
      !targetImage.processedUrl && (config.watermarkType === "image" ? watermark : config.textWatermark && (config.watermarkType === "text" || config.watermarkType === "pattern")) && /* @__PURE__ */ React.createElement(React.Fragment, null, config.watermarkType === "image" && watermark && /* @__PURE__ */ React.createElement(
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
      ), config.watermarkType === "text" && config.textWatermark && /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "absolute pointer-events-none select-none",
          style: {
            ...getPositionStyle(config.position),
            opacity: config.opacity,
            fontSize: `${Math.max(8, config.textSize * 0.15)}px`,
            fontFamily: config.textFont,
            color: config.textColor,
            transform: `${getPositionStyle(config.position).transform || ""} rotate(${config.textRotation}deg)`,
            textShadow: config.shadowEnabled ? `${config.shadowOffsetX}px ${config.shadowOffsetY}px ${config.shadowBlur}px ${config.shadowColor}` : "none",
            whiteSpace: "nowrap"
          }
        },
        config.textWatermark
      ), config.watermarkType === "pattern" && config.textWatermark && /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 pointer-events-none select-none overflow-hidden" }, Array.from({ length: 20 }, (_, i) => /* @__PURE__ */ React.createElement(
        "div",
        {
          key: i,
          className: "absolute",
          style: {
            left: `${i % 5 * 25}%`,
            top: `${Math.floor(i / 5) * 25}%`,
            opacity: config.opacity * 0.7,
            fontSize: `${Math.max(6, config.textSize * 0.1)}px`,
            fontFamily: config.textFont,
            color: config.textColor,
            transform: `rotate(${config.textRotation}deg)`,
            textShadow: config.shadowEnabled ? `${config.shadowOffsetX * 0.5}px ${config.shadowOffsetY * 0.5}px ${config.shadowBlur * 0.5}px ${config.shadowColor}` : "none",
            whiteSpace: "nowrap"
          }
        },
        config.textWatermark
      ))))
    ), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-gray-600 text-center mt-2" }, t("base"), ": ", config.width, " x ", config.height, "px \u2022 ", previewMode === "landscape" ? t("landscape") : t("portrait"), imageDims && /* @__PURE__ */ React.createElement("span", { className: "text-gray-500 ml-2" }, "(", t("original"), ": ", imageDims.width, "x", imageDims.height, ")"), targetImage.processed && /* @__PURE__ */ React.createElement("span", { className: "text-green-600 ml-2" }, "\u2713 ", t("processed"))));
  })()) : /* @__PURE__ */ React.createElement("div", { className: "text-center text-gray-500" }, /* @__PURE__ */ React.createElement(ImageIcon, { className: "w-12 h-12 mx-auto mb-2 opacity-50" }), /* @__PURE__ */ React.createElement("p", null, t("previewPlaceholder"))))), /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded-lg shadow-sm p-6" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between mb-4" }, /* @__PURE__ */ React.createElement("h2", { className: "text-lg font-semibold text-gray-800" }, t("yourImages"), " (", images.length, ")"), images.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "flex gap-2" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: processImages,
      disabled: isProcessing || images.length === 0,
      className: "bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
    },
    isProcessing ? t("processing") : t("process")
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: downloadAll,
      disabled: !images.some((img) => img.processed),
      className: "bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors flex items-center gap-1 disabled:bg-gray-400 disabled:cursor-not-allowed"
    },
    /* @__PURE__ */ React.createElement(Download, { className: "w-4 h-4" }),
    t("downloadZip")
  ))), /* @__PURE__ */ React.createElement("div", { className: "space-y-3 max-h-96 overflow-y-auto" }, images.length === 0 ? /* @__PURE__ */ React.createElement("div", { className: "text-center text-gray-500 py-8" }, /* @__PURE__ */ React.createElement(FileImage, { className: "w-12 h-12 mx-auto mb-2 opacity-50" }), /* @__PURE__ */ React.createElement("p", null, t("noImages")), /* @__PURE__ */ React.createElement("p", { className: "text-sm" }, t("uploadImagesHint"))) : images.map((image, index) => /* @__PURE__ */ React.createElement(
    "div",
    {
      key: image.id,
      className: `flex items-center gap-3 p-3 rounded-lg border ${image.processed ? "bg-green-50 border-green-200" : "bg-gray-50 border-gray-200"}`
    },
    /* @__PURE__ */ React.createElement("div", { className: "w-12 h-12 bg-purple-100 rounded flex items-center justify-center" }, /* @__PURE__ */ React.createElement(FileImage, { className: "w-6 h-6 text-purple-600" })),
    /* @__PURE__ */ React.createElement("div", { className: "flex-1 min-w-0" }, /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium text-gray-800 truncate" }, image.name), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-gray-500" }, image.processed ? t("processed") : isProcessing ? t("processing") : t("waiting"), imagesDimensions[image.id] && /* @__PURE__ */ React.createElement("span", { className: "ml-2" }, "\u2022 ", imagesDimensions[image.id].width, "x", imagesDimensions[image.id].height, imagesDimensions[image.id].isVertical ? ` (${t("portrait")})` : ` (${t("landscape")})`))),
    image.processed && /* @__PURE__ */ React.createElement("div", { className: "w-4 h-4 bg-green-500 rounded-full flex items-center justify-center" }, /* @__PURE__ */ React.createElement("div", { className: "w-2 h-2 bg-white rounded-full" }))
  ))))), /* @__PURE__ */ React.createElement("div", { className: "mt-8 text-center" }, /* @__PURE__ */ React.createElement("p", { className: "text-sm text-gray-500" }, t("footer")))));
};
var stdin_default = WatermarkResizeApp;
export {
  stdin_default as default
};
