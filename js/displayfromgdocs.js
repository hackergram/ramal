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
		
function addVideoRows(video,rowmax=3){
	video.forEach(function(d){
		rowmax=Math.min(rowmax,video.length)
		console.log(d)
		d3.select("#vidrow").append("section").attr("class", "col mb4")
			.html('<div class="card">\
					<div class="card-body">\
						<h5 class="card-title">'+d['id']+'</h5>\
						<h6>'+d['displaylang']+'</h6>\
						<p class="card-text">'+d['text']+'</p>\
						<iframe width=100% height="300" src="'+d['embed']+'"></iframe>\
					</div>\
					</div>');
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


function addDocRows(doc,rowmax=3){
	doc.forEach(function(d){
		rowmax=Math.min(rowmax,doc.length)
		console.log(d)
		d3.select("#vidrow").append("section").attr("class", "col mb4")
			.html('<div class="card">\
					<div class="card-body">\
						<a href="'+d['where']+'" target="_blank">\
						<h5 class="card-title">'+d['id']+'</h5>\
						<h6>'+d['displaylang']+'</h6>\
						<p class="card-text">'+d['text']+'</p></a>\
						<iframe width=100% height="300" src="'+d['embed']+'"></iframe>\
					</div>\
					</div>');
	})
}
	
function displayDocs(servurl=null){
	if (servurl!=null){
		//console.log(servurl)
		$.getJSON(servurl,function(data){
			entry=data.feed.entry
			docs=getDict(entry)
			console.log(docs)
			addDocRows(docs)
			//this.shuffle.add(services)
		});
	}
}
