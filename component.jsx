import React, { useState, useRef } from 'react';
import { Upload, Image as ImageIcon, Settings, Eye, Download, FileImage, Globe } from 'lucide-react';
import JSZip from 'jszip';

// Configurações de idiomas
const languages = {
  pt: {
    code: 'pt',
    name: 'Português',
    flag: '🇧🇷',
    translations: {
      // Header
      appTitle: 'MarkResize',
      appSubtitle: 'Redimensione e adicione sua marca d\'água em várias imagens',
      
      // Upload Section
      uploadFiles: 'Carregar Arquivos',
      uploadImages: 'Carregar Imagens',
      uploadWatermark: 'Carregar Marca D\'água',
      watermarkTypes: {
        image: 'Imagem',
        text: 'Texto',
        pattern: 'Padrão'
      },
      
      // Text Watermark
      textLabel: 'Texto da Marca',
      textPlaceholder: 'Digite o texto...',
      font: 'Fonte',
      textSize: 'Tamanho',
      textColor: 'Cor do Texto',
      rotation: 'Rotação',
      
      // Pattern
      patternText: 'Texto do Padrão',
      patternPlaceholder: 'SAMPLE',
      spacing: 'Espaçamento',
      
      // Configuration
      configure: 'Configurar',
      width: 'Largura (px)',
      height: 'Altura (px)',
      maintainAspect: 'Manter proporção (sem sobras)',
      aspectHelp: 'Paisagem: altura ajustada proporcionalmente. Retrato: largura ajustada proporcionalmente.',
      aspectHelpOff: 'A imagem será esticada para caber exatamente nas dimensões definidas',
      
      // Position
      positioning: 'Posicionamento da Marca D\'água',
      positions: {
        'top-left': 'Superior Esquerdo',
        'top-right': 'Superior Direito',
        'bottom-left': 'Inferior Esquerdo',
        'bottom-right': 'Inferior Direito',
        'bottom-center': 'Inferior Centro',
        'center': 'Centro'
      },
      
      // Effects
      opacity: 'Opacidade',
      watermarkSize: 'Tamanho da Marca',
      shadowEffects: 'Ativar Sombra na Logo',
      blur: 'Desfoque',
      offsetX: 'Deslocamento X',
      offsetY: 'Deslocamento Y',
      shadowOpacity: 'Opacidade da Sombra',
      shadowColor: 'Cor da Sombra',
      
      // Preview
      preview: 'Pré-visualização',
      landscape: 'Paisagem',
      portrait: 'Retrato',
      previewPlaceholder: 'Carregue uma imagem para ver a pré-visualização',
      
      // Images List
      yourImages: 'Suas Imagens',
      process: 'Processar',
      processing: 'Processando...',
      downloadZip: 'Baixar ZIP',
      noImages: 'Nenhuma imagem carregada',
      uploadImagesHint: 'Faça upload das suas imagens',
      
      // Status
      processed: 'Processada ✓',
      waiting: 'Aguardando',
      
      // Messages
      watermarkSuccess: '✓ Marca d\'água:',
      textSuccess: '✓ Texto:',
      noImagesToProcess: 'Nenhuma imagem carregada para processar.',
      selectWatermarkImage: 'Selecione uma imagem para marca d\'água ou use o modo de texto.',
      enterWatermarkText: 'Digite um texto para a marca d\'água.',
      noProcessedImages: 'Nenhuma imagem processada para download.',
      
      // Footer
      footer: '© 2025 PauloCunhaMKT Soluções TI • v1.1.0',
      
      // Dimensions
      base: 'Base',
      original: 'Original'
    }
  },
  
  en: {
    code: 'en',
    name: 'English',
    flag: '🇺🇸',
    translations: {
      // Header
      appTitle: 'MarkResize',
      appSubtitle: 'Resize and add watermarks to multiple images',
      
      // Upload Section
      uploadFiles: 'Upload Files',
      uploadImages: 'Upload Images',
      uploadWatermark: 'Upload Watermark',
      watermarkTypes: {
        image: 'Image',
        text: 'Text',
        pattern: 'Pattern'
      },
      
      // Text Watermark
      textLabel: 'Watermark Text',
      textPlaceholder: 'Enter text...',
      font: 'Font',
      textSize: 'Size',
      textColor: 'Text Color',
      rotation: 'Rotation',
      
      // Pattern
      patternText: 'Pattern Text',
      patternPlaceholder: 'SAMPLE',
      spacing: 'Spacing',
      
      // Configuration
      configure: 'Configure',
      width: 'Width (px)',
      height: 'Height (px)',
      maintainAspect: 'Maintain aspect ratio (no crop)',
      aspectHelp: 'Landscape: height adjusted proportionally. Portrait: width adjusted proportionally.',
      aspectHelpOff: 'Image will be stretched to fit exactly the defined dimensions',
      
      // Position
      positioning: 'Watermark Positioning',
      positions: {
        'top-left': 'Top Left',
        'top-right': 'Top Right',
        'bottom-left': 'Bottom Left',
        'bottom-right': 'Bottom Right',
        'bottom-center': 'Bottom Center',
        'center': 'Center'
      },
      
      // Effects
      opacity: 'Opacity',
      watermarkSize: 'Watermark Size',
      shadowEffects: 'Enable Logo Shadow',
      blur: 'Blur',
      offsetX: 'X Offset',
      offsetY: 'Y Offset',
      shadowOpacity: 'Shadow Opacity',
      shadowColor: 'Shadow Color',
      
      // Preview
      preview: 'Preview',
      landscape: 'Landscape',
      portrait: 'Portrait',
      previewPlaceholder: 'Upload an image to see preview',
      
      // Images List
      yourImages: 'Your Images',
      process: 'Process',
      processing: 'Processing...',
      downloadZip: 'Download ZIP',
      noImages: 'No images uploaded',
      uploadImagesHint: 'Upload your images',
      
      // Status
      processed: 'Processed ✓',
      waiting: 'Waiting',
      
      // Messages
      watermarkSuccess: '✓ Watermark:',
      textSuccess: '✓ Text:',
      noImagesToProcess: 'No images loaded to process.',
      selectWatermarkImage: 'Select a watermark image or use text mode.',
      enterWatermarkText: 'Enter text for the watermark.',
      noProcessedImages: 'No processed images to download.',
      
      // Footer
      footer: '© 2025 PauloCunhaMKT Tech Solutions • v1.1.0',
      
      // Dimensions
      base: 'Base',
      original: 'Original'
    }
  },
  
  es: {
    code: 'es',
    name: 'Español',
    flag: '🇪🇸',
    translations: {
      // Header
      appTitle: 'MarkResize',
      appSubtitle: 'Redimensiona y añade marcas de agua a múltiples imágenes',
      
      // Upload Section
      uploadFiles: 'Subir Archivos',
      uploadImages: 'Subir Imágenes',
      uploadWatermark: 'Subir Marca de Agua',
      watermarkTypes: {
        image: 'Imagen',
        text: 'Texto',
        pattern: 'Patrón'
      },
      
      // Text Watermark
      textLabel: 'Texto de Marca',
      textPlaceholder: 'Ingrese texto...',
      font: 'Fuente',
      textSize: 'Tamaño',
      textColor: 'Color del Texto',
      rotation: 'Rotación',
      
      // Pattern
      patternText: 'Texto del Patrón',
      patternPlaceholder: 'MUESTRA',
      spacing: 'Espaciado',
      
      // Configuration
      configure: 'Configurar',
      width: 'Ancho (px)',
      height: 'Alto (px)',
      maintainAspect: 'Mantener proporción (sin recorte)',
      aspectHelp: 'Paisaje: altura ajustada proporcionalmente. Retrato: ancho ajustado proporcionalmente.',
      aspectHelpOff: 'La imagen se estirará para ajustarse exactamente a las dimensiones definidas',
      
      // Position
      positioning: 'Posicionamiento de Marca de Agua',
      positions: {
        'top-left': 'Superior Izquierda',
        'top-right': 'Superior Derecha',
        'bottom-left': 'Inferior Izquierda',
        'bottom-right': 'Inferior Derecha',
        'bottom-center': 'Inferior Centro',
        'center': 'Centro'
      },
      
      // Effects
      opacity: 'Opacidad',
      watermarkSize: 'Tamaño de Marca',
      shadowEffects: 'Activar Sombra del Logo',
      blur: 'Desenfoque',
      offsetX: 'Desplazamiento X',
      offsetY: 'Desplazamiento Y',
      shadowOpacity: 'Opacidad de Sombra',
      shadowColor: 'Color de Sombra',
      
      // Preview
      preview: 'Vista Previa',
      landscape: 'Paisaje',
      portrait: 'Retrato',
      previewPlaceholder: 'Sube una imagen para ver la vista previa',
      
      // Images List
      yourImages: 'Tus Imágenes',
      process: 'Procesar',
      processing: 'Procesando...',
      downloadZip: 'Descargar ZIP',
      noImages: 'No hay imágenes subidas',
      uploadImagesHint: 'Sube tus imágenes',
      
      // Status
      processed: 'Procesada ✓',
      waiting: 'Esperando',
      
      // Messages
      watermarkSuccess: '✓ Marca de agua:',
      textSuccess: '✓ Texto:',
      noImagesToProcess: 'No hay imágenes cargadas para procesar.',
      selectWatermarkImage: 'Selecciona una imagen de marca de agua o usa el modo texto.',
      enterWatermarkText: 'Ingresa texto para la marca de agua.',
      noProcessedImages: 'No hay imágenes procesadas para descargar.',
      
      // Footer
      footer: '© 2025 PauloCunhaMKT Soluciones TI • v1.1.0',
      
      // Dimensions
      base: 'Base',
      original: 'Original'
    }
  }
};

const WatermarkResizeApp = () => {
  const [images, setImages] = useState([]);
  const [watermark, setWatermark] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [imagesDimensions, setImagesDimensions] = useState({});
  const [currentLanguage, setCurrentLanguage] = useState('pt');
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [config, setConfig] = useState({
    width: 1920,
    height: 1080,
    maintainAspect: true,
    position: 'bottom-right',
    opacity: 0.7,
    watermarkSize: 20,
    shadowEnabled: false,
    shadowBlur: 5,
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    shadowOffsetX: 2,
    shadowOffsetY: 2,
    // Novas configurações para texto e padrão
    watermarkType: 'image', // 'image' ou 'text' ou 'pattern'
    textWatermark: 'SAMPLE',
    textFont: 'Arial',
    textSize: 48,
    textColor: '#000000',
    textRotation: -45,
    patternSpacing: 200,
    patternEnabled: false
  });
  const [previewMode, setPreviewMode] = useState('landscape');
  
  const imageInputRef = useRef(null);
  const watermarkInputRef = useRef(null);
  
  // Função para obter traduções
  const t = (key) => {
    const keys = key.split('.');
    let value = languages[currentLanguage].translations;
    for (const k of keys) {
      value = value[k];
      if (!value) return key; // Fallback para a chave se não encontrar tradução
    }
    return value;
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageId = Date.now() + Math.random();
        const imageData = {
          id: imageId,
          name: file.name,
          src: e.target.result,
          processed: false
        };
        
        // Criar uma imagem temporária para obter as dimensões
        const tempImg = new Image();
        tempImg.onload = () => {
          setImagesDimensions(prev => ({
            ...prev,
            [imageId]: {
              width: tempImg.width,
              height: tempImg.height,
              isVertical: tempImg.height > tempImg.width
            }
          }));
        };
        tempImg.src = e.target.result;
        
        setImages(prev => [...prev, imageData]);
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
      'top-left': { top: '10px', left: '10px' },
      'top-right': { top: '10px', right: '10px' },
      'bottom-left': { bottom: '10px', left: '10px' },
      'bottom-right': { bottom: '10px', right: '10px' },
      'bottom-center': { bottom: '10px', left: '50%', transform: 'translateX(-50%)' },
      'center': { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }
    };
    return positions[position] || positions['bottom-right'];
  };

  // Função para redimensionar imagem e aplicar marca d'água
  const processImage = (imageData, watermarkData, config, imageDimensions) => {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      const img = new window.Image();
      img.crossOrigin = 'anonymous';
      img.onerror = () => reject(new Error('Erro ao carregar imagem'));
      img.onload = () => {
        // Implementar a lógica do código original
        let newWidth = config.width;
        let newHeight = config.height;
        const imageAspectRatio = img.width / img.height;
        
        if (config.maintainAspect) {
          if (imageAspectRatio >= 1) { // Landscape or square
            newHeight = Math.round(newWidth / imageAspectRatio);
          } else { // Portrait
            newWidth = Math.round(newHeight * imageAspectRatio);
          }
        }
        
        canvas.width = newWidth;
        canvas.height = newHeight;
        
        // Desenhar a imagem primeiro
        ctx.drawImage(img, 0, 0, newWidth, newHeight);
        
        // Aplicar marca d'água baseado no tipo
        if (config.watermarkType === 'text' && config.textWatermark) {
          // Desenhar marca d'água de texto
          ctx.save();
          
          // Configurar fonte e estilo
          ctx.font = `${config.textSize}px ${config.textFont}`;
          ctx.fillStyle = config.textColor;
          ctx.globalAlpha = config.opacity;
          
          // Aplicar sombra se habilitada
          if (config.shadowEnabled) {
            ctx.shadowColor = config.shadowColor;
            ctx.shadowBlur = config.shadowBlur;
            ctx.shadowOffsetX = config.shadowOffsetX;
            ctx.shadowOffsetY = config.shadowOffsetY;
          }
          
          // Calcular posição do texto
          const textMetrics = ctx.measureText(config.textWatermark);
          const textWidth = textMetrics.width;
          const textHeight = config.textSize;
          
          let textX, textY;
          const margin = 20;
          
          switch (config.position) {
            case 'top-left':
              textX = margin;
              textY = margin + textHeight;
              break;
            case 'top-right':
              textX = newWidth - textWidth - margin;
              textY = margin + textHeight;
              break;
            case 'bottom-left':
              textX = margin;
              textY = newHeight - margin;
              break;
            case 'bottom-right':
              textX = newWidth - textWidth - margin;
              textY = newHeight - margin;
              break;
            case 'bottom-center':
              textX = (newWidth - textWidth) / 2;
              textY = newHeight - margin;
              break;
            case 'center':
              textX = (newWidth - textWidth) / 2;
              textY = (newHeight + textHeight) / 2;
              break;
            default:
              textX = newWidth - textWidth - margin;
              textY = newHeight - margin;
          }
          
          // Aplicar rotação se necessário
          if (config.textRotation !== 0) {
            ctx.translate(textX + textWidth / 2, textY - textHeight / 2);
            ctx.rotate((config.textRotation * Math.PI) / 180);
            ctx.fillText(config.textWatermark, -textWidth / 2, textHeight / 4);
          } else {
            ctx.fillText(config.textWatermark, textX, textY);
          }
          
          ctx.restore();
          
        } else if (config.watermarkType === 'pattern' && config.textWatermark) {
          // Desenhar padrão repetitivo diagonal
          ctx.save();
          
          ctx.font = `${config.textSize}px ${config.textFont}`;
          ctx.fillStyle = config.textColor;
          ctx.globalAlpha = config.opacity;
          
          // Aplicar sombra se habilitada
          if (config.shadowEnabled) {
            ctx.shadowColor = config.shadowColor;
            ctx.shadowBlur = config.shadowBlur;
            ctx.shadowOffsetX = config.shadowOffsetX;
            ctx.shadowOffsetY = config.shadowOffsetY;
          }
          
          const spacing = config.patternSpacing;
          const diagonal = Math.sqrt(newWidth * newWidth + newHeight * newHeight);
          
          // Criar padrão diagonal repetitivo
          for (let i = -diagonal; i < diagonal; i += spacing) {
            for (let j = -diagonal; j < diagonal; j += spacing) {
              ctx.save();
              ctx.translate(i, j);
              ctx.rotate((config.textRotation * Math.PI) / 180);
              ctx.fillText(config.textWatermark, 0, 0);
              ctx.restore();
            }
          }
          
          ctx.restore();
          
        } else if (watermarkData && config.watermarkType === 'image') {
          // Aplicar marca d'água de imagem
          const watermarkImg = new window.Image();
          watermarkImg.crossOrigin = 'anonymous';
          watermarkImg.onerror = () => reject(new Error('Erro ao carregar marca d\'água'));
          watermarkImg.onload = () => {
            // Calcular tamanho da marca d'água (seguindo lógica original)
            const logoScaleFactor = config.watermarkSize / 100;
            const logoReferenceWidth = config.width;
            
            const logoAspectRatio = watermarkImg.width / watermarkImg.height;
            let logoWidth = logoReferenceWidth * logoScaleFactor;
            let logoHeight = logoWidth / logoAspectRatio;
            
            // Garantir que a logo não ultrapasse 90% das dimensões
            if (logoHeight > newHeight * 0.9) {
              logoHeight = newHeight * 0.9;
              logoWidth = logoHeight * logoAspectRatio;
            }
            if (logoWidth > newWidth * 0.9) {
              logoWidth = newWidth * 0.9;
              logoHeight = logoWidth / logoAspectRatio;
            }
            
            // Calcular posição da marca d'água
            let watermarkX, watermarkY;
            const margin = 20;
            
            switch (config.position) {
              case 'top-left':
                watermarkX = margin;
                watermarkY = margin;
                break;
              case 'top-right':
                watermarkX = newWidth - logoWidth - margin;
                watermarkY = margin;
                break;
              case 'bottom-left':
                watermarkX = margin;
                watermarkY = newHeight - logoHeight - margin;
                break;
              case 'bottom-right':
                watermarkX = newWidth - logoWidth - margin;
                watermarkY = newHeight - logoHeight - margin;
                break;
              case 'bottom-center':
                watermarkX = (newWidth - logoWidth) / 2;
                watermarkY = newHeight - logoHeight - margin;
                break;
              case 'center':
                watermarkX = (newWidth - logoWidth) / 2;
                watermarkY = (newHeight - logoHeight) / 2;
                break;
              default:
                watermarkX = newWidth - logoWidth - margin;
                watermarkY = newHeight - logoHeight - margin;
            }
            
            // Aplicar efeito de sombra se habilitado
            if (config.shadowEnabled) {
              ctx.shadowColor = config.shadowColor;
              ctx.shadowBlur = config.shadowBlur;
              ctx.shadowOffsetX = config.shadowOffsetX;
              ctx.shadowOffsetY = config.shadowOffsetY;
              ctx.globalAlpha = config.shadowOpacity;
              
              // Desenhar sombra
              ctx.drawImage(watermarkImg, watermarkX, watermarkY, logoWidth, logoHeight);
              
              // Limpar configurações de sombra
              ctx.shadowColor = 'transparent';
              ctx.shadowBlur = 0;
              ctx.shadowOffsetX = 0;
              ctx.shadowOffsetY = 0;
            }
            
            // Aplicar opacidade da marca d'água
            ctx.globalAlpha = config.opacity;
            
            // Desenhar marca d'água
            ctx.drawImage(watermarkImg, watermarkX, watermarkY, logoWidth, logoHeight);
            
            // Restaurar opacidade
            ctx.globalAlpha = 1.0;
            
            // Converter para blob
            canvas.toBlob((blob) => {
              if (blob) {
                resolve(blob);
              } else {
                reject(new Error('Erro ao converter imagem'));
              }
            }, 'image/jpeg', 0.9);
          };
          watermarkImg.src = watermarkData;
        }
        
        // Para texto e padrão, converter diretamente para blob
        if (config.watermarkType === 'text' || config.watermarkType === 'pattern' || !watermarkData) {
          canvas.toBlob((blob) => {
            if (blob) {
              resolve(blob);
            } else {
              reject(new Error('Erro ao converter imagem'));
            }
          }, 'image/jpeg', 0.9);
        }
      };
      img.src = imageData;
    });
  };

  const processImages = async () => {
    if (images.length === 0) {
      alert(t('noImagesToProcess'));
      return;
    }
    
    // Validar se temos marca d'água configurada
    if (config.watermarkType === 'image' && !watermark) {
      alert(t('selectWatermarkImage'));
      return;
    }
    
    if ((config.watermarkType === 'text' || config.watermarkType === 'pattern') && !config.textWatermark.trim()) {
      alert(t('enterWatermarkText'));
      return;
    }

    setIsProcessing(true);
    
    try {
      const processedImages = [];
      
      for (let i = 0; i < images.length; i++) {
        const image = images[i];
        
        // Validar se a imagem ainda está disponível
        if (!image.src) {
          throw new Error(`Imagem ${image.name} não está disponível`);
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
          processedBlob: processedBlob,
          processedUrl: URL.createObjectURL(processedBlob)
        });
        
        // Atualizar estado incrementalmente para mostrar progresso
        setImages(prev => prev.map((img, index) => 
          index <= i ? processedImages[index] || img : img
        ));
      }
      
    } catch (error) {
      console.error('Erro ao processar imagens:', error);
      alert(`Erro ao processar imagens: ${error.message}. Verifique se as imagens são válidas e tente novamente.`);
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadAll = async () => {
    const processedImages = images.filter(img => img.processed && img.processedBlob);
    
    if (processedImages.length === 0) {
      alert(t('noProcessedImages'));
      return;
    }
    
    try {
      const zip = new JSZip();
      
      // Adicionar cada imagem processada ao ZIP
      processedImages.forEach((image, index) => {
        const fileName = `processed_${image.name}`;
        zip.file(fileName, image.processedBlob);
      });
      
      // Gerar o arquivo ZIP
      const zipBlob = await zip.generateAsync({ type: 'blob' });
      
      // Criar download
      const link = document.createElement('a');
      link.href = URL.createObjectURL(zipBlob);
      link.download = `processed_images_${new Date().getTime()}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Limpar URLs temporárias
      URL.revokeObjectURL(link.href);
      
    } catch (error) {
      console.error('Erro ao criar ZIP:', error);
      alert('Erro ao criar arquivo ZIP. Tente novamente.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <img 
                src="assets/vxiUCCZsIArK5m9Z9JAQN.png" 
                alt="Logo" 
                className="w-8 h-8 rounded" 
              />
              <h1 className="text-xl font-bold text-gray-800 whitespace-nowrap">{t('appTitle')}</h1>
            </div>
            
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>{languages[currentLanguage].flag}</span>
                <span className="text-sm font-medium">{languages[currentLanguage].name}</span>
              </button>
              
              {showLanguageDropdown && (
                <div className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-40">
                  {Object.values(languages).map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLanguage(lang.code);
                        setShowLanguageDropdown(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                        currentLanguage === lang.code ? 'bg-purple-50 text-purple-700' : 'text-gray-700'
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="text-sm font-medium">{lang.name}</span>
                      {currentLanguage === lang.code && (
                        <span className="ml-auto text-purple-600">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <p className="text-gray-600">{t('appSubtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Panel - Upload and Config */}
          <div className="space-y-6">
            {/* Upload Section */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Upload className="w-5 h-5" />
                {t('uploadFiles')}
              </h2>
              
              <div className="space-y-3">
                <button
                  onClick={() => imageInputRef.current?.click()}
                  className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
                >
                  <FileImage className="w-5 h-5" />
                  {t('uploadImages')}
                </button>
                
                <div className="space-y-2">
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => setConfig(prev => ({ ...prev, watermarkType: 'image' }))}
                      className={`px-3 py-2 text-xs rounded transition-colors ${
                        config.watermarkType === 'image' 
                          ? 'bg-purple-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {t('watermarkTypes.image')}
                    </button>
                    <button
                      onClick={() => setConfig(prev => ({ ...prev, watermarkType: 'text' }))}
                      className={`px-3 py-2 text-xs rounded transition-colors ${
                        config.watermarkType === 'text' 
                          ? 'bg-purple-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {t('watermarkTypes.text')}
                    </button>
                    <button
                      onClick={() => setConfig(prev => ({ ...prev, watermarkType: 'pattern' }))}
                      className={`px-3 py-2 text-xs rounded transition-colors ${
                        config.watermarkType === 'pattern' 
                          ? 'bg-purple-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {t('watermarkTypes.pattern')}
                    </button>
                  </div>
                  
                  {config.watermarkType === 'image' && (
                    <button
                      onClick={() => watermarkInputRef.current?.click()}
                      className="w-full bg-purple-100 text-purple-700 py-3 px-4 rounded-lg hover:bg-purple-200 transition-colors flex items-center justify-center gap-2"
                    >
                      <ImageIcon className="w-5 h-5" />
                      {t('uploadWatermark')}
                    </button>
                  )}
                </div>

                <input
                  ref={imageInputRef}
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                
                <input
                  ref={watermarkInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleWatermarkUpload}
                  className="hidden"
                />
              </div>

              {config.watermarkType === 'text' && (
                <div className="mt-3 space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('textLabel')}
                    </label>
                    <input
                      type="text"
                      value={config.textWatermark}
                      onChange={(e) => setConfig(prev => ({ ...prev, textWatermark: e.target.value }))}
                      placeholder={t('textPlaceholder')}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t('font')}
                      </label>
                      <select
                        value={config.textFont}
                        onChange={(e) => setConfig(prev => ({ ...prev, textFont: e.target.value }))}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                      >
                        <option value="Arial">Arial</option>
                        <option value="Arial Black">Arial Black</option>
                        <option value="Helvetica">Helvetica</option>
                        <option value="Times New Roman">Times</option>
                        <option value="Verdana">Verdana</option>
                        <option value="Impact">Impact</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t('textSize')}: {config.textSize}px
                      </label>
                      <input
                        type="range"
                        min="12"
                        max="120"
                        value={config.textSize}
                        onChange={(e) => setConfig(prev => ({ ...prev, textSize: parseInt(e.target.value) }))}
                        className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t('textColor')}
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="color"
                          value={config.textColor}
                          onChange={(e) => setConfig(prev => ({ ...prev, textColor: e.target.value }))}
                          className="w-8 h-8 rounded border border-gray-300 cursor-pointer"
                        />
                        <span className="text-xs text-gray-500">{config.textColor}</span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t('rotation')}: {config.textRotation}°
                      </label>
                      <input
                        type="range"
                        min="-90"
                        max="90"
                        value={config.textRotation}
                        onChange={(e) => setConfig(prev => ({ ...prev, textRotation: parseInt(e.target.value) }))}
                        className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              )}
              
              {config.watermarkType === 'pattern' && (
                <div className="mt-3 space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('patternText')}
                    </label>
                    <input
                      type="text"
                      value={config.textWatermark}
                      onChange={(e) => setConfig(prev => ({ ...prev, textWatermark: e.target.value }))}
                      placeholder={t('patternPlaceholder')}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('spacing')}: {config.patternSpacing}px
                    </label>
                    <input
                      type="range"
                      min="100"
                      max="400"
                      value={config.patternSpacing}
                      onChange={(e) => setConfig(prev => ({ ...prev, patternSpacing: parseInt(e.target.value) }))}
                      className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t('textSize')}: {config.textSize}px
                      </label>
                      <input
                        type="range"
                        min="24"
                        max="80"
                        value={config.textSize}
                        onChange={(e) => setConfig(prev => ({ ...prev, textSize: parseInt(e.target.value) }))}
                        className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t('textColor')}
                      </label>
                      <input
                        type="color"
                        value={config.textColor}
                        onChange={(e) => setConfig(prev => ({ ...prev, textColor: e.target.value }))}
                        className="w-8 h-8 rounded border border-gray-300 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              )}

              {watermark && config.watermarkType === 'image' && (
                <div className="mt-3 p-3 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-700">{t('watermarkSuccess')} {watermark.name}</p>
                </div>
              )}
              
              {(config.watermarkType === 'text' || config.watermarkType === 'pattern') && config.textWatermark && (
                <div className="mt-3 p-3 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-700">{t('textSuccess')} "{config.textWatermark}"</p>
                </div>
              )}
            </div>

            {/* Configuration Section */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5" />
                {t('configure')}
              </h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('width')}
                    </label>
                    <input
                      type="number"
                      value={config.width}
                      onChange={(e) => setConfig(prev => ({ ...prev, width: parseInt(e.target.value) }))}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('height')}
                    </label>
                    <input
                      type="number"
                      value={config.height}
                      onChange={(e) => setConfig(prev => ({ ...prev, height: parseInt(e.target.value) }))}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="maintainAspect"
                    checked={config.maintainAspect}
                    onChange={(e) => setConfig(prev => ({ ...prev, maintainAspect: e.target.checked }))}
                    className="w-4 h-4 text-purple-600"
                  />
                  <label htmlFor="maintainAspect" className="text-sm text-gray-700">
                    {t('maintainAspect')}
                  </label>
                </div>
                <p className="text-xs text-gray-500 ml-6">
                  {config.maintainAspect ? 
                    t('aspectHelp') : 
                    t('aspectHelpOff')}
                </p>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('positioning')}
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {[
                      { value: 'top-left', label: t('positions.top-left') },
                      { value: 'top-right', label: t('positions.top-right') },
                      { value: 'bottom-left', label: t('positions.bottom-left') },
                      { value: 'bottom-right', label: t('positions.bottom-right') },
                      { value: 'bottom-center', label: t('positions.bottom-center') },
                      { value: 'center', label: t('positions.center') }
                    ].map(pos => (
                      <label key={pos.value} className="flex items-center gap-1">
                        <input
                          type="radio"
                          name="position"
                          value={pos.value}
                          checked={config.position === pos.value}
                          onChange={(e) => setConfig(prev => ({ ...prev, position: e.target.value }))}
                          className="w-3 h-3"
                        />
                        {pos.label}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('opacity')}: {Math.round(config.opacity * 100)}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={config.opacity}
                    onChange={(e) => setConfig(prev => ({ ...prev, opacity: parseFloat(e.target.value) }))}
                    className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('watermarkSize')}: {config.watermarkSize}%
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="50"
                    value={config.watermarkSize}
                    onChange={(e) => setConfig(prev => ({ ...prev, watermarkSize: parseInt(e.target.value) }))}
                    className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                {/* Efeitos de Sombra */}
                <div className="border-t pt-4">
                  <div className="flex items-center gap-2 mb-3">
                    <input
                      type="checkbox"
                      id="shadowEnabled"
                      checked={config.shadowEnabled}
                      onChange={(e) => setConfig(prev => ({ ...prev, shadowEnabled: e.target.checked }))}
                      className="w-4 h-4 text-purple-600"
                    />
                    <label htmlFor="shadowEnabled" className="text-sm font-medium text-gray-700">
                      {t('shadowEffects')}
                    </label>
                  </div>

                  {config.shadowEnabled && (
                    <div className="space-y-3 ml-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {t('blur')}: {config.shadowBlur}px
                        </label>
                        <input
                          type="range"
                          min="0"
                          max="20"
                          value={config.shadowBlur}
                          onChange={(e) => setConfig(prev => ({ ...prev, shadowBlur: parseInt(e.target.value) }))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            {t('offsetX')}: {config.shadowOffsetX}px
                          </label>
                          <input
                            type="range"
                            min="-10"
                            max="10"
                            value={config.shadowOffsetX}
                            onChange={(e) => setConfig(prev => ({ ...prev, shadowOffsetX: parseInt(e.target.value) }))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            {t('offsetY')}: {config.shadowOffsetY}px
                          </label>
                          <input
                            type="range"
                            min="-10"
                            max="10"
                            value={config.shadowOffsetY}
                            onChange={(e) => setConfig(prev => ({ ...prev, shadowOffsetY: parseInt(e.target.value) }))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {t('shadowOpacity')}: {Math.round(config.shadowOpacity * 100)}%
                        </label>
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.1"
                          value={config.shadowOpacity}
                          onChange={(e) => setConfig(prev => ({ ...prev, shadowOpacity: parseFloat(e.target.value) }))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {t('shadowColor')}
                        </label>
                        <div className="flex items-center gap-2">
                          <input
                            type="color"
                            value={config.shadowColor}
                            onChange={(e) => setConfig(prev => ({ ...prev, shadowColor: e.target.value }))}
                            className="w-8 h-8 rounded border border-gray-300 cursor-pointer"
                          />
                          <span className="text-xs text-gray-500">{config.shadowColor}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Middle Panel - Preview */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <Eye className="w-5 h-5" />
                {t('preview')}
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={() => setPreviewMode('landscape')}
                  className={`px-3 py-1 text-xs rounded ${previewMode === 'landscape' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                >
                  {t('landscape')}
                </button>
                <button
                  onClick={() => setPreviewMode('portrait')}
                  className={`px-3 py-1 text-xs rounded ${previewMode === 'portrait' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                >
                  {t('portrait')}
                </button>
              </div>
            </div>

            <div className="border-2 border-dashed border-purple-300 rounded-lg p-4 min-h-64 flex items-center justify-center">
              {images.length > 0 ? (
                <div className="relative">
                  {(() => {
                    // Encontrar primeira imagem do tipo selecionado usando as dimensões armazenadas
                    const targetImage = previewMode === 'landscape' 
                      ? images.find(img => {
                          const dims = imagesDimensions[img.id];
                          return dims && !dims.isVertical;
                        }) || images[0]
                      : images.find(img => {
                          const dims = imagesDimensions[img.id];
                          return dims && dims.isVertical;
                        }) || images[0];
                    
                    const imageDims = imagesDimensions[targetImage.id];
                    
                    return (
                      <>
                        <div 
                          className={`relative bg-gray-100 border-2 border-gray-200 rounded ${
                            previewMode === 'landscape' ? 'w-64 h-36' : 'w-36 h-64'
                          }`}
                        >
                          <img
                            src={targetImage.processedUrl || targetImage.src}
                            alt="Preview"
                            className="w-full h-full object-contain bg-white rounded"
                          />
                          {/* Pré-visualização da marca d'água */}
                          {!targetImage.processedUrl && (config.watermarkType === 'image' ? watermark : (config.textWatermark && (config.watermarkType === 'text' || config.watermarkType === 'pattern'))) && (
                            <>
                              {/* Marca d'água de imagem */}
                              {config.watermarkType === 'image' && watermark && (
                                <div
                                  className="absolute"
                                  style={{
                                    ...getPositionStyle(config.position),
                                    opacity: config.opacity,
                                    width: `${config.watermarkSize}%`,
                                    filter: config.shadowEnabled ? 
                                      `drop-shadow(${config.shadowOffsetX}px ${config.shadowOffsetY}px ${config.shadowBlur}px ${config.shadowColor}${Math.round(config.shadowOpacity * 255).toString(16).padStart(2, '0')})` : 
                                      'none'
                                  }}
                                >
                                  <img
                                    src={watermark.src}
                                    alt="Watermark"
                                    className="w-full h-auto"
                                  />
                                </div>
                              )}
                              
                              {/* Marca d'água de texto simples */}
                              {config.watermarkType === 'text' && config.textWatermark && (
                                <div
                                  className="absolute pointer-events-none select-none"
                                  style={{
                                    ...getPositionStyle(config.position),
                                    opacity: config.opacity,
                                    fontSize: `${Math.max(8, config.textSize * 0.15)}px`,
                                    fontFamily: config.textFont,
                                    color: config.textColor,
                                    transform: `${getPositionStyle(config.position).transform || ''} rotate(${config.textRotation}deg)`,
                                    textShadow: config.shadowEnabled ? 
                                      `${config.shadowOffsetX}px ${config.shadowOffsetY}px ${config.shadowBlur}px ${config.shadowColor}` : 
                                      'none',
                                    whiteSpace: 'nowrap'
                                  }}
                                >
                                  {config.textWatermark}
                                </div>
                              )}
                              
                              {/* Marca d'água em padrão */}
                              {config.watermarkType === 'pattern' && config.textWatermark && (
                                <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
                                  {Array.from({ length: 20 }, (_, i) => (
                                    <div
                                      key={i}
                                      className="absolute"
                                      style={{
                                        left: `${(i % 5) * 25}%`,
                                        top: `${Math.floor(i / 5) * 25}%`,
                                        opacity: config.opacity * 0.7,
                                        fontSize: `${Math.max(6, config.textSize * 0.1)}px`,
                                        fontFamily: config.textFont,
                                        color: config.textColor,
                                        transform: `rotate(${config.textRotation}deg)`,
                                        textShadow: config.shadowEnabled ? 
                                          `${config.shadowOffsetX * 0.5}px ${config.shadowOffsetY * 0.5}px ${config.shadowBlur * 0.5}px ${config.shadowColor}` : 
                                          'none',
                                        whiteSpace: 'nowrap'
                                      }}
                                    >
                                      {config.textWatermark}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </>
                          )}
                        </div>
                        <p className="text-xs text-gray-600 text-center mt-2">
                          {t('base')}: {config.width} x {config.height}px • {previewMode === 'landscape' ? t('landscape') : t('portrait')}
                          {imageDims && (
                            <span className="text-gray-500 ml-2">
                              ({t('original')}: {imageDims.width}x{imageDims.height})
                            </span>
                          )}
                          {targetImage.processed && <span className="text-green-600 ml-2">✓ {t('processed')}</span>}
                        </p>
                      </>
                    );
                  })()}
                </div>
              ) : (
                <div className="text-center text-gray-500">
                  <ImageIcon className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p>{t('previewPlaceholder')}</p>
                </div>
              )}
            </div>
          </div>

          {/* Right Panel - Images List */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {t('yourImages')} ({images.length})
              </h2>
              {images.length > 0 && (
                <div className="flex gap-2">
                  <button
                    onClick={processImages}
                    disabled={isProcessing || images.length === 0}
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {isProcessing ? t('processing') : t('process')}
                  </button>
                  <button
                    onClick={downloadAll}
                    disabled={!images.some(img => img.processed)}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors flex items-center gap-1 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    <Download className="w-4 h-4" />
                    {t('downloadZip')}
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-3 max-h-96 overflow-y-auto">
              {images.length === 0 ? (
                <div className="text-center text-gray-500 py-8">
                  <FileImage className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p>{t('noImages')}</p>
                  <p className="text-sm">{t('uploadImagesHint')}</p>
                </div>
              ) : (
                images.map((image, index) => (
                  <div
                    key={image.id}
                    className={`flex items-center gap-3 p-3 rounded-lg border ${
                      image.processed ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    <div className="w-12 h-12 bg-purple-100 rounded flex items-center justify-center">
                      <FileImage className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-800 truncate">
                        {image.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {image.processed ? t('processed') : isProcessing ? t('processing') : t('waiting')}
                        {imagesDimensions[image.id] && (
                          <span className="ml-2">
                            • {imagesDimensions[image.id].width}x{imagesDimensions[image.id].height}
                            {imagesDimensions[image.id].isVertical ? ` (${t('portrait')})` : ` (${t('landscape')})`}
                          </span>
                        )}
                      </p>
                    </div>
                    {image.processed && (
                      <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            {t('footer')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WatermarkResizeApp;