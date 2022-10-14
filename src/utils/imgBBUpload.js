const imgBBUpload =async (image) => {
    try {
        const imageStorageKey = `f26a8878d26810881658787352cb5dcd`;
        const imageStorageUrl = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
       const response = await fetch(imageStorageUrl, {
          method: "POST",
          body: image,
       })
        const data = await response.json();
        // console.log(data.data.display_url)
        return data.data.display_url;
    } catch (error) {
        return null;
    }

 
  
};
export default imgBBUpload;
