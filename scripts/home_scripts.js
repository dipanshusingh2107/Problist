window.addEventListener("load" , ()=>{


	let allbtns=document.querySelectorAll(".incre_btn");
	for(let i=0;i<allbtns.length;i++)
	{
		allbtns[i].addEventListener("click",(e)=>{
			let id=e.target.id;
			id = id.slice(3,);
			console.log(id);
			$.post("/incre",{probID : id} ,function(data, status){
				console.log(data);
				if(status == 'success')
				document.getElementById("cnt"+data.probID).innerHTML= data.count;
			});
		})
	}



})
