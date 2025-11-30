import { removeBackground, loadImage } from './backgroundRemoval';

export const processLogoImage = async (): Promise<string> => {
  try {
    // Load the uploaded logo image
    const response = await fetch('/lovable-uploads/musetera-logo.jpeg');
    const blob = await response.blob();
    
    // Convert to HTMLImageElement
    const imageElement = await loadImage(blob);
    
    // Remove background
    const processedBlob = await removeBackground(imageElement);
    
    // Create object URL for the processed image
    return URL.createObjectURL(processedBlob);
  } catch (error) {
    console.error('Error processing logo:', error);
    // Fallback to original image
    return '/lovable-uploads/musetera-logo.jpeg';
  }
};