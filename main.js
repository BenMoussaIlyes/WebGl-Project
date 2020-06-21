


						var createRails = function() {


						objLoader.load( 'data/models/rail1.obj',
							 function ( obj ) {
									rail1 = obj;
									rail1.rotateX(90.0*2.0*Math.PI/360.0);
									rail1.scale.set(0.1,0.1,0.1);
									rail1.translateX(-100.0);
									rail1.translateZ(100.0+(30));	
									rail1.translateY(10.0);
									rail1.traverse( function ( child ) {	
										if ( child.isMesh ) 
										child.material = textureDeRail;
				
									} );
									scene.add( rail1 );
									
							}
						);


};