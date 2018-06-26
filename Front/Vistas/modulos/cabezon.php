<!-- Declaramos el top -->

<div class ="container-fluid BarraSuperior" id = "top">
	<div class="container">
		<div class ="row">
			<!-- Social -->
			<div class ="col-lg-9 col-md-9 col-sm-8 col-xs-12">
				<ul>
					<li>
						<a href = "https://facebook.com/" target="_blank">
							
							<i class="fab fa-facebook-square redSocial facebookBlanco" aria-hidden ="true""></i>
						</a>


					</li>

				</ul>

			</div>

			<!-- registro -->
			<div class ="col-lg-3 col-md-3 col-sm-4 col-xs-12 registro">
				<ul>
					<li><a href ="#modalIngreso" data-toggle = "modal">Ingresar</a></li>
					<li>|</li>
					<li><a href ="#modalRegistro" data-toggle = "modal">Crear una cuenta</a></li>
				</ul>
			</div>
			

		</div>
	</div>
	<!-- Declaramos el Header-->
	<header  class="container-fluid">
		<div class="container">
			<div class ="row" id = "cabezon">
				<!-- Logotipo-->
				<div class ="col-lg-3 col-md-3 col-sm-3 col-xs-12" id="logotipo">
					<a href ="#">
						<img src="http://localhost/ppweb_01/PPWeb_01/Back/vistas/Img/logo_test.png" class ="img-responsive">
					</a>
				</div>
				<!-- Categorias-->
				<div class = "col-lg-6 col-md-6 col-sm-8 col-xs-12">
					<div class = "col-lg-4 col-md-4 col-sm-4 col-xs-12 backColor" id = "botonCategoria">
						<p>Categoria
							<span class ="pull-right"><i class="fa fa-bars" aria-hidden ="true"></i></span>
						</p>
						
					</div>
					<!-- Buscador-->
					<div class="input-group col-lg-8 col-md-8 col-sm-8 col-xs-12" id="buscador">
						<input type="search" name="buscar" class="form-control" placeholder="Buscar...">
						
						<span class="input-group-btn">
							<a href="#">
								<button class="btn btn-default backColor" type="submit">
									<i class="fa fa-serch"></i>
								</button>
							</a>
						</span>
					</div>
				</div>
				
			</div>
		</div>
		
	</header>
</div>