<?php
/* Template Name: Sala de Imprensa */

get_header(); ?>
<?php get_template_part('parts/comp-header'); ?>
	<div id="" class="" role="main">
		<div id="">
			<div id="primeira-linha">			
					<div id="content" class="home col-md-5">	
						<?php

						get_template_part( 'loop', 'page' );
						?>
								
					</div><!-- #content -->
					
					<div id="video-institucional" class="col-md-7">
						<iframe width="639" height="369" src="http://www.youtube.com/embed/Wv4WY35OwMM" frameborder="0" allowfullscreen></iframe>
					</div>
				
			</div><!-- #primeira-linha -->

			<div id="segunda-linha">
				<div id="query-post0"class="col-md-4">
					<a class="query-releases" href="<?php echo home_url( '/category/releases' ); ?>"><h1 class="title-query-link">Releases</h1></a>
				
					<?php 
					//Adiciona o query de Releases
					get_template_part( 'loop-releases');
					?>
				
				</div>				
				<div id="query-post2" class="col-md-4">
					<a class="query-boletim" href="<?php echo home_url( '/category/boletins' ); ?>"><h1 class="title-query-link">Boletins</h1></a>
					<?php
					//Adiciona o query de Boletins
					 get_template_part('loop-boletim');
					?>
				</div>
				<div id="query-post3"class="col-md-4">
					<a class="query-newsletter" href="<?php echo home_url( '/category/newsletter' ); ?>"><h1 class="title-query-link">Newsletter</h1></a>
					<?php
					//Adiciona o query de Newsletter
					 get_template_part( 'loop-newsletter');
					?>
				</div>
				
			</div><!-- #segunda-linha -->

			<div id="terceira-linha">
			
				<div id="query-post4" class="col-md-4">
					<a class="query-eventos" href="<?php echo home_url( '/category/eventos' ); ?>"><h1 class="title-query-link">Eventos</h1></a>
				
					<?php 
					//Adiciona o query de Eventos
					get_template_part( 'loop-eventos');
					?>
				
				</div><!-- #query-post4 -->				
				
				<div id="query-post5" class="col-md-4">
					<a class="query-apresentacoes" href="<?php echo home_url( '/category/apresentacoes' ); ?>"><h1 class="title-query-link">Apresenta&ccedil;&otilde;es</h1></a>
					<?php
					//Adiciona o query de Apresentações
					 get_template_part('loop-apresentacoes');
					?>
				</div>
				<div id="query-post6" class="col-md-4">
					<a class="query-editais" href="<?php echo home_url( '/category/editais' ); ?>"><h1 class="title-query-link">Editais</h1></a>
					<?php
					//Adiciona o query de Editais
					 get_template_part( 'loop-editais');
					?>
				</div>
			
			</div><!-- #terceira-linha -->
			

			<div id="galeria-linha">
				<div id="galeria-imprensa"class="col-md-12">
					<h1 class="title-query"><span class="query-destaques">Fotos de Divulga&ccedil;&atilde;o</span></h1>
					<?php
					echo do_shortcode('[satellite post_id=846]');
					?>
				</div>
						
			</div><!-- #galeria-linha -->

			<div class="clearfix"></div>
		</div><!-- #content-home  -->
	</div><!--id="" class="col-md-10" role="main"-->

		<?php get_footer('cat'); ?>
