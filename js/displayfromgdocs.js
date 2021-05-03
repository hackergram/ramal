function getDict(entry){
			dict=[]
			$(entry).each(function(){
				
				template={}
				template['id']=this.title.$t
				valuepairs=this.content.$t.split(", ")
				$(valuepairs).each(function(){
					key=$.trim(this.split(": ")[0]);
					value=$.trim(this.split(": ")[1]);
					value=value.replace(",",", ")
					template[key]=value;
				});
				dict.push(template)		
			});
			return dict
		}
		
function addVideoRows(team,rowmax=3){
	team.forEach(function(d){
		rowmax=Math.min(rowmax,team.length)
		d3.select("#vidrow").append("section").attr("class", "col mb4")
			.html('<div class="card">\
      <img src="..." class="card-img-top" alt="...">\
      <div class="card-body">\
        <h5 class="card-title">Card title</h5>\
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\
      </div>\
    </div>\
     <iframe width="420" height="315"\
src="https://www.youtube.com/embed/orLPJiHVGZQ?autoplay=1&mute=1">\
</iframe>\ ');
	})
}

	
function displayVideos(servurl=null){
	if (servurl!=null){
		//console.log(servurl)
		$.getJSON(servurl,function(data){
			entry=data.feed.entry
			services=getDict(entry)
			console.log(services)
			addVideoRows(services)
			//this.shuffle.add(services)
		});
	}
}
