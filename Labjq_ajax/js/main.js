
 $('#search').submit(function (evt){
   evt.preventDefault();
   const osoite = $(this).attr('action');
   const search = $(this).serialize();
  // const url = proxy + osoite  +'?'+ hakulause
   const url =  osoite  +'?'+ search
   $.getJSON(url, function (series){
       $.each(series, function (i, data){
       const names = data.show.name;
       const language = data.show.language;
       const id = data.show.id;
       const url = data.show.url;
       const images=  data.show.image.medium;
       $('#tulos').append(`<p>Show name: ${names}</p>`,`<p>Show language: ${language}</p>`,`<p>Show Id: ${id}</p>`,`<p>Show url: ${url}</p>`,`<img src='${images}'>`)

     });

   });
   // We get new result every  new searching//
        $("#tulos").html("");

 });


