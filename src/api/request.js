const DEFAULT_URL = 'http://ec2-3-127-145-151.eu-central-1.compute.amazonaws.com:8000/api'

 const Fetch = async (path, options) => {
    const token = localStorage.getItem("IdTokenGoogle")
    const requestOptions = {
        method: options.method || 'GET',
        headers: {
            'Content-Type': 'application/json',
             Authorization: `Bearer ${token}`,
        },
    }
    if (options.method !== 'GET') {
        requestOptions.body = JSON.stringify(options.body)
    }

 
    const jsonData = await fetch(`${DEFAULT_URL}/${path}`, requestOptions)
      
    const result = await jsonData.json()
    // console.log('result', result.data);
    return result.data
  
}

export default Fetch