import moment from "moment";


export const API_KEY = "AIzaSyD5ZumAVDVgyQYvf1shnNqnoxu1FP5OjSs";

export const value_converter = (value) => {
    if (value >= 1000000) {
        return Math.floor(value/1000000)+"M"
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}



export const formatPublishedAt = (publishedAt) => {
    // Parse the publishedAt string into a Moment object
    const date = moment(publishedAt);

    // Choose your desired date format (e.g., "YYYY-MM-DD")
    const formattedDate = date.format('DD-MM-YYYY');

    return formattedDate;
};