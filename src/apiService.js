import axios from 'axios'
import React from 'react'

export function getNewsApi() {
   return  axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=120e2035f28241b8b280e2173dd98e13&in`)
}
