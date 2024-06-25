const basieUrl="http://www.marahschool.somee.com/api"

export const axiosGet=  (Route) => {
  const data = axios.get(`${basieUrl}/${Route}`).then((response)=>{
      return response.data
  })
  



}