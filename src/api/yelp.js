import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer Ft527ZXpcx1SH0Btq3x_4kNEjgz4qG8W5FrwfgW4DnlQYcZSJSx4jugPsbPpaKMgderC9PeX0k87au3tjnv2OKqJG36DWroREqw6f2oykbIZ41avULQ237Y6li_0YHYx'
    }
});