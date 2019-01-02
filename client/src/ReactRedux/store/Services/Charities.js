// var axios = require('axios')
// export function getAllCh(){
// return axios.get('/charities')
//   .then(function (response) {
//     console.log(response);
//       return response
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// }

import $ from "jquery";

// export function getAllCh(){
//  $.ajax({
//     url: '/charities',
//     dataType: 'json',
//     type: "GET",
//     success: function(data) {
//         console.log(data,"/charities/charities/charities/charities")
//      return data;
//     }.bind(this),
//     error: function(xhr, status, err) {
//       console.error(this.props.url, status, err.toString());
//     }.bind(this)
//   });
// }


// var getAllCh = () => {
//  $.ajax({
//     url: '/charities',
//     dataType: 'json',
//     type: "GET",
//     success: function(data) {
//         console.log(data,"/charities/charities/charities/charities")
//      return data;
//     }.bind(this),
//     error: function(xhr, status, err) {
//       console.error(this.props.url, status, err.toString());
//     }.bind(this)
//   });
// }


   var AddCh = function (data) {
   
      $.ajax({
        url: "/charities",
        type: "POST",
        data: JSON.stringify({data}),
        contentType: "application/json",
        success: function(data) {
          console.log("Add", data);
        },
        error: function(error) {
          console.error("errorrrrrr", error);
        }
      });
    } 
    // var chArr = getAllCh();

    // export default chArr;
    
    