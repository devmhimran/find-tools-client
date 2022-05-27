import { useEffect, useState } from "react"



const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                });
        }
    }, [user])


    return [token];
}

export default useToken;



// {
//     "productName": "ETC R40 SMART REAR LIGHT WITH BRAKE SENSOR",
//     "productImage":"https://cdn.shopify.com/s/files/1/0328/9897/3740/products/etc-rear-light_grande.jpg?v=1637756261",
//    "productDescription": "ETC R40 Smart Rear Light with Brake Sensor Feature: Brake Warning Feature: Auto Light Sensing Feature: Auto Sleep Feature: Auto Awake Material: PA66/PC AI Alloy Weight: 27 grams Functions: Steady-Breathing Flash-Slow Flash-Fast Flash- Rhythm Flash-Eco Flash Burntime 10 - 35hrs Battery 350 mAh Lithium Ion Silicone or Se",
//     "productQuantity": 250,
//     "productPrice": 500
//   },