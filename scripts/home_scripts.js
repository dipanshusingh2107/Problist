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


	let headings = document.querySelectorAll(".heading");

	getid = (prefix , id)=>{
		return id.slice(prefix.length , );
	}

	expand = (e)=>{
		id = getid("heading", e.target.id);
		console.log(id)
		container = document.querySelector("#div"+id);
		arrow = document.querySelector("#arrow"+id);
		if(container.style.display != "none")
		{
			container.style.display = "none";
			arrow.style.backgroundImage = "url('../styles/icons/right-arrow.png')";
		}
		else
		{
			container.style.display = "block";
			arrow.style.backgroundImage = "url('../styles/icons/down-arrow.png')";
		}
	}

	for(i=0;i<headings.length;i++)
	{
		headings[i].addEventListener("click" , expand);
	}

	
	arrows = document.querySelectorAll(".arrow-right-1");
	for(i =0;i<arrows.length;i++)
	{
		arrows[i].addEventListener("click" , expand);
	}

})
