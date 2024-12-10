import API_KEYS from "./APIKey";

async function getImages(speciesList){

    const newList = []
    for (const species of speciesList) {
        const sciName = species.sciName;
        console.log(species);
        console.log(sciName);


    try {
      
      const response = await fetch(`https://nuthatch.lastelm.software/v2/birds?page=1&pageSize=25&sciName=${encodeURIComponent(sciName)}`, {
        headers: {
          'api-key': API_KEYS["API_NUTHATCH"] 
        },
      });

      if (!response.ok) {
        throw new Error(`API request for ${sciName} failed with status: ${response.status}`);
      }

      const data = await response.json();

      if (data.entities && data.entities.length > 0) {
        const firstEntity = data.entities[0];
          if (firstEntity.images && firstEntity.images.length > 0) { 
          // Only add species if images exist
          newList.push({
            ...species,
            order: firstEntity.order,
            family: firstEntity.family,
            images: firstEntity.images,
          });
        } else {
          console.log(`No images found for ${sciName}`);
        }
      } else {
        console.log(`No entity data found for ${sciName}`);

      }

      if (newList.length === 10) {
        return newList;
      }
    
    } catch (error) {
      console.error(`Error fetching data for ${sciName}: ${error.message}`);
    }
  }

  

return newList;

}

export default getImages;

