// const heading = React.createElement("h1" , {id:"heading" , xyz:"abc"} , "hello world !");


  const parent = React.createElement("div"  , {id:"parent" } , React.createElement("div" , {id:"child"} , React.createElement("h1" ,{} , " I am gitanjali"))  );

       const root = ReactDOM.createRoot(document.getElementById("root"));
       root.render(parent);