(function($) {
	$.fn.jqImgBlur = function(options) {
		var svgNS = "http://www.w3.org/2000/svg";
		var defOptns = {
			stdDeviation : 7,
			brightness : 0.5,
			scircles : [],
			srectangles : [],
			sellipses : [],
			spaths : [],
			spolygons : [],
			stexts : [],
			sintros : {
				intromode:false,
				scircles : [],
				srectangles : [],
				sellipses : [],
				spaths : [],
				spolygons : [],
				stexts : []
			},
			smouseover : {
				delay:300
			}
		};
		
		$.extend(true, defOptns, options);
		
		var makeCircle = function(cInfo) {
			var circle = document.createElementNS(svgNS,"circle");
			circle.setAttribute("cx", cInfo.cx);
			circle.setAttribute("cy", cInfo.cy);
			circle.setAttribute("r", cInfo.r);
			circle.setAttribute("fill", "white");
			circle.style.opacity = '1';
			return circle;
		};
		
		var makeRectangle = function(cInfo) {
			var rect = document.createElementNS(svgNS,"rect");
			rect.setAttribute("x", cInfo.x);
			rect.setAttribute("y", cInfo.y);
			rect.setAttribute("width", cInfo.width);
			rect.setAttribute("height", cInfo.height);
			rect.setAttribute("fill", "white");
			rect.style.opacity = '1';
			return rect;
		};
		
		var makeEllipse = function(cInfo) {
			var ellipse = document.createElementNS(svgNS,"ellipse");
			ellipse.setAttribute("cx", cInfo.cx);
			ellipse.setAttribute("cy", cInfo.cy);
			ellipse.setAttribute("rx", cInfo.rx);
			ellipse.setAttribute("ry", cInfo.ry);
			ellipse.setAttribute("fill", "white");
			ellipse.style.opacity = '1';
			return ellipse;
		};
		
		var makePath = function(cInfo) {
			var path = document.createElementNS(svgNS,"path");
			path.setAttribute("d", cInfo.d);
			path.setAttribute("fill", "white");
			path.style.opacity = '1';
			return path;
		};
		
		var makePolygon = function(cInfo) {
			var path = document.createElementNS(svgNS,"polygon");
			path.setAttribute("points", cInfo.points);
			path.setAttribute("fill", "white");
			path.style.opacity = '1';
			return path;
		};
		
        var imgLoadFun = function(el) {
			var imageSrc = $(el).prop("src");
			var w = $(el).width();
			var h = $(el).height();
			var html = $('<div class="jqImgBlurPic" style="width:'+ w + 'px;height:' + h + 'px">'
					+ '    <svg class="blur" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="'+ w + '" height="' + h + '">'
					+ '      <image  filter="url(#filter2)" xlink:href="'+ imageSrc+ '" width="100%" height="100%"></image>'
					+ '      <filter id="filter2">'
					+ '        <feGaussianBlur stdDeviation="'+ defOptns.stdDeviation + '" />'
					+'         <feComponentTransfer>'+
					 '          <feFuncR type="linear" slope="'+ defOptns.brightness +'"/>'+
					 '          <feFuncG type="linear" slope="'+ defOptns.brightness +'"/>'+
					 '          <feFuncB type="linear" slope="'+ defOptns.brightness +'"/>'+
					 '          </feComponentTransfer>'
					+ '      </filter>'
					+ '      <mask id="mask1"> '
					+ '      </mask>'
					+ '       <image xlink:href="'+ imageSrc+ '" width="100%" height="100%" mask="url(#mask1)"></image>'
					+ '    </svg>' + '  </div>');
			$(el).css('display', 'none');
			$(html).insertAfter(el);
			var pic = $(html).find(".blur")[0];
			var mask = $(html).find("#mask1")[0];
			var rect = pic.getBoundingClientRect();
			var cInfo;
			var shape;
			
			for ( var i in defOptns.scircles) {
				mask.appendChild(makeCircle(defOptns.scircles[i]));
			}

			for ( var i in defOptns.srectangles) {
				mask.appendChild(makeRectangle(defOptns.srectangles[i]));
			}

			for ( var i in defOptns.sellipses) {
				mask.appendChild(makeEllipse(defOptns.sellipses[i]));
			}

			for ( var i in defOptns.spaths) {
				mask.appendChild(makePath(defOptns.spaths[i]));
			}

			for ( var i in defOptns.spolygons) {
				mask.appendChild(makePolygon(defOptns.spolygons[i]));
			}
          
			for ( var i in defOptns.stexts) {
				cInfo = defOptns.stexts[i];
			    var stext = $('<span class="textClass" style="'+ cInfo.style + '">' + cInfo.text	+ '</span>');
				$(html).append(stext);
			}
      
		    if(defOptns.sintros !== undefined && defOptns.sintros.intromode) {
		        introFun(defOptns.sintros, mask,html);
		    }
		    
		    if(defOptns.smouseover !== undefined) {
		    	mouseOverFun(mask,html,rect);
		    }
		    
		    if(defOptns.sclick !== undefined) {
		    	clickFun(mask,html,rect);
		    }
        };
        
        var introFun = function(intros,mask,html) {
	        var cInfo;
			var shapeElm;
	        var descText;
	        var delay = 0;
	        var shape = '';
	        var shapes = [];
            if(defOptns.sintros.scircles.length > 0){
            	shape = 'circle';
            	shapes = defOptns.sintros.scircles;
            } else if(defOptns.sintros.srectangles.length > 0) {
            	shape = 'rect';
            	shapes = defOptns.sintros.srectangles;
            } else  if(defOptns.sintros.sellipses.length > 0){
            	shape = 'ellipse';
            	shapes = defOptns.sintros.sellipses;
            } else if(defOptns.sintros.spaths.length > 0){
            	shape = 'path';
            	shapes = defOptns.sintros.spaths;
            } else if(defOptns.sintros.spolygons.length > 0){
            	shape = 'polygon';
            	shapes = defOptns.sintros.spolygons;
            }
	        for ( var i in shapes) {
		          if(i > 0) {
		           delay = i+1;
		          }
		          setTimeout((function(i,mask){
		              return function(){
		               cInfo = defOptns.sintros.srectangles[i];
		                if(i==0) {
		                  shapeElm = document.createElementNS(svgNS, shape);
		                }
		                if(shape === 'circle') {
		                	shapeElm.setAttribute("cx", cInfo.cx);
		                	shapeElm.setAttribute("cy", cInfo.cy);
		                	shapeElm.setAttribute("r", cInfo.r);
		                } else if(shape === 'rect') {
		                	shapeElm.setAttribute("x", cInfo.x);
			                shapeElm.setAttribute("y", cInfo.y);
			                shapeElm.setAttribute("width", cInfo.width);
			                shapeElm.setAttribute("height", cInfo.height);
		                } else if(shape === 'ellipse') {
		                	shapeElm.setAttribute("cx", cInfo.cx);
		                	shapeElm.setAttribute("cy", cInfo.cy);
		                	shapeElm.setAttribute("rx", cInfo.rx);
		                	shapeElm.setAttribute("ry", cInfo.ry);
		                } else if(shape === 'path') {
		                	shapeElm.setAttribute("d", cInfo.d);
		                } else if(shape === 'polygon') {
		                	shapeElm.setAttribute("points", cInfo.points);
		                }
		                
		                shapeElm.setAttribute("fill", "white");
		                shapeElm.style.opacity = '1';
		                shapeElm.style.transition = 'all '+intros.transitionDelay+'ms linear';
		                if(i==0) {
		                  mask.appendChild(shapeElm);
		                }
		                cInfo = defOptns.sintros.stexts[i];
		                if(i==0) {
		                  descText = $('<span class="textClass">' + cInfo.text	+ '</span>');
		                  descText[0].style.transition = 'all '+intros.transitionDelay+'ms linear';
		                  $(html).append(descText);
		                }
		                descText[0].style = cInfo.style;
		                descText[0].style.transition = 'all '+intros.transitionDelay+'ms linear';
		                descText[0].innerText = cInfo.text;
		            };
	              })(i,mask), intros.delay * (delay));
		    }
        }  
    
        var mouseOverFun = function(mask,html,rect) {
	        var cInfo;
			var shape = '';
	        if(defOptns.smouseover.circle !== undefined){
            	shape = 'circle';
            	cInfo = defOptns.smouseover.circle;
            } else if(defOptns.smouseover.rectangle !== undefined) {
            	shape = 'rect';
            	cInfo = defOptns.smouseover.rectangle;
            } else  if(defOptns.smouseover.ellipse !== undefined){
            	shape = 'ellipse';
            	cInfo = defOptns.smouseover.ellipse;
            } 
	        $(html).mousemove(function (event) {
	            event.preventDefault();
	            var upX = event.clientX - rect.left;
	            var upY = event.clientY - rect.top;
	            var shapeElm = document.createElementNS(svgNS, shape);
	            if(shape === 'circle') {
                	shapeElm.setAttribute("cx", upX);
                	shapeElm.setAttribute("cy", upY);
                	shapeElm.setAttribute("r", cInfo.r);
                } else if(shape === 'rect') {
                	shapeElm.setAttribute("x", upX-(cInfo.width/2));
	                shapeElm.setAttribute("y", upY-(cInfo.height/2));
	                shapeElm.setAttribute("width", cInfo.width);
	                shapeElm.setAttribute("height", cInfo.height);
                } else if(shape === 'ellipse') {
                	shapeElm.setAttribute("cx", upX);
                	shapeElm.setAttribute("cy", upY);
                	shapeElm.setAttribute("rx", cInfo.rx);
                	shapeElm.setAttribute("ry", cInfo.ry);
                }
	            shapeElm.setAttribute("fill", "white");
	            shapeElm.style.opacity = '1';
	            mask.appendChild(shapeElm);
	            setTimeout(function(){ 
	            	shapeElm.style.opacity = '0';
	                setTimeout(function(){ 
	                    mask.removeChild(shapeElm);
	                }, 300);
	            }, defOptns.smouseover.delay);
	        });
        }
        
        var clickFun = function(mask,html,rect) {
	        var cInfo;
			var shape = '';
	        if(defOptns.sclick.circle !== undefined){
            	shape = 'circle';
            	cInfo = defOptns.sclick.circle;
            } else if(defOptns.sclick.rectangle !== undefined) {
            	shape = 'rect';
            	cInfo = defOptns.sclick.rectangle;
            } else  if(defOptns.sclick.ellipse !== undefined){
            	shape = 'ellipse';
            	cInfo = defOptns.sclick.ellipse;
            } 
	        $(html).click(function (event) {
	            event.preventDefault();
	            var upX = event.clientX - rect.left;
	            var upY = event.clientY - rect.top;
	            var shapeElm = document.createElementNS(svgNS, shape);
	            if(shape === 'circle') {
                	shapeElm.setAttribute("cx", upX);
                	shapeElm.setAttribute("cy", upY);
                	shapeElm.setAttribute("r", cInfo.r);
                } else if(shape === 'rect') {
                	shapeElm.setAttribute("x", upX-(cInfo.width/2));
	                shapeElm.setAttribute("y", upY-(cInfo.height/2));
	                shapeElm.setAttribute("width", cInfo.width);
	                shapeElm.setAttribute("height", cInfo.height);
                } else if(shape === 'ellipse') {
                	shapeElm.setAttribute("cx", upX);
                	shapeElm.setAttribute("cy", upY);
                	shapeElm.setAttribute("rx", cInfo.rx);
                	shapeElm.setAttribute("ry", cInfo.ry);
                }
	            shapeElm.setAttribute("fill", "white");
	            shapeElm.style.opacity = '1';
	            mask.appendChild(shapeElm);
	        });
        }
        
        $.each(this,function(ind, el) {
        	if (!el.complete || (typeof el.naturalWidth !== "undefined" && el.naturalWidth === 0) ) {
        		$(el).load(function(){
        			imgLoadFun(this)
        		});
            } else {
            	imgLoadFun(el);
            }
	    });
	};
}(jQuery));