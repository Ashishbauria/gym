export const exerciseOption ={
    
      method: 'GET',
      url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
      headers: {
        'X-RapidAPI-Key': '14ff817e21msh89f7db2e4007dacp18382bjsn09e817c75ff3',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    
}
export const youtubeOptions = {
  method: 'GET',
  url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
 
  headers: {
    'X-RapidAPI-Key': '14ff817e21msh89f7db2e4007dacp18382bjsn09e817c75ff3',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const Fetchdata = async (url,options) => {
    const response =await fetch(url,options);
    const data =await response.json();
  return data;
  
}


