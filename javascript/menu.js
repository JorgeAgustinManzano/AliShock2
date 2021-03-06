
var imgC = [
    'img/gal_fotos/IMG-20200912-WA0008.jpg',
    'img/gal_fotos/IMG-20200912-WA0009.jpg',
    'img/gal_fotos/IMG-20200912-WA0010.jpg',
    'img/gal_fotos/IMG-20200912-WA0011.jpg',
    'img/gal_fotos/IMG-20200912-WA0012.jpg',
    'img/gal_fotos/IMG-20200912-WA0013.jpg',
    'img/gal_fotos/IMG-20200912-WA0014.jpg',
    'img/gal_fotos/IMG-20200912-WA0015.jpg',
    'img/gal_fotos/IMG-20200912-WA0001.jpg',
    'img/gal_fotos/IMG-20200912-WA0002.jpg',
    'img/gal_fotos/IMG-20200912-WA0003.jpg',
    'img/gal_fotos/IMG-20200912-WA0004.jpg',
    'img/gal_fotos/IMG-20200912-WA0005.jpg',
    'img/gal_fotos/IMG-20200912-WA0006.jpg'
]

var videosC = [
    '<iframe src="https://www.youtube.com/embed/I5J9pTxr5Ds" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen',
    '<iframe src="https://www.youtube.com/embed/FNRofX1Ja4U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen',
    '<iframe src="https://www.youtube.com/embed/9xM3YCTVTRo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen',
    '<iframe src="https://www.youtube.com/embed/z7JwE7kDTxw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen',
    '<iframe src="https://www.youtube.com/embed/WDj86MKk8ok" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen',
    '<iframe src="https://www.youtube.com/embed/nJEKnLNN9j4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen',
    '<iframe src="https://www.youtube.com/embed/hxWRA6kUIow" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen',
    '<iframe src="https://www.youtube.com/embed/a3Pm4YcIPZg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen',
    '<iframe src="https://www.youtube.com/embed/ozIkvOQRDmM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen'
]


let encabezado =
    `<nav class="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar color-nav">
        <div class="container">
            <img class="navbar-brand ml-3" src="img/logo redondo.png" width="40" alt=""><a class="navbar-brand" href="#">AliShock</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <!-- <li class="nav-item active">
                        <a class="nav-link" href="#">Inicio <span class="sr-only">(current)</span></a>
                    </li> -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Inicio
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" data-toggle="modal" data-target="#modalPush1" href="#seccion">Nosotros</a>
                        </div>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Recomendaciones</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Servicios
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown" id="clickServicios">
                            <a class="dropdown-item" data-toggle="modal" data-target="#modalPush"  @click="abrirModal(0)" href="#">Alisado Definitivo</a>
                            <a class="dropdown-item" data-toggle="modal" data-target="#modalPush" @click="abrirModal(1)" href="#">Botox Capilar</a>
                            <a class="dropdown-item" data-toggle="modal" data-target="#modalPush" @click="abrirModal(2)"href="#">Shock de Keratina</a>
                            <a class="dropdown-item" data-toggle="modal" data-target="#modalPush" @click="abrirModal(3)"href="#">Nutriciones</a>
                            <a class="dropdown-item" data-toggle="modal" data-target="#modalPush" @click="abrirModal(4)"href="#">Corte de Puntas</a>
                            <a class="dropdown-item" data-toggle="modal" data-target="#modalPush" @click="abrirModal(5)"href="#">Tintura Capilar</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Galeria
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" data-toggle="modal" data-target="#modalGVideos" href="#">Galeria Videos</a>
                            <a class="dropdown-item" data-toggle="modal" data-target="#modalGImagenes" href="#">Galeria Fotos</a>
                            <a class="dropdown-item" data-toggle="modal" data-target="#modalVideos" href="#">Carusel Videos</a>
                            <a class="dropdown-item" data-toggle="modal" data-target="#modalImagenes" href="#">Carusel Fotos</a>       
                        </div>
                    </li>
                </ul>
                <ul class="navbar-nav nav-flex-icon">
                    <li class="nav-item mr-4">
                        <a id="ubicacion" href="#"><img src="img/como llegar.png" width="30" height="30"
                                title="Direccion/Como Llegar/Horarios"></a>
                    </li>
                    <!-- <li class="nav-item ml-3">
                        <a href="#"><img src="img/logo redondo.png" width="40" height="40"
                            title="Logo"></a>
                    </li> -->
                </ul>
            </div>
        </div>
    </nav>`


let pieDePagina =
    `<footer class="page-footer font-small dark darken-3 ">
<div class="container">
    <div class="row">
        <div class="col-md-12 py-1">
            <div class="mb-2 flex-center">
                <a class="fb-ic">
                    <i class="fab fa-facebook-f fa-lg white-text mr-2"></i>
                </a>
                <a class="tw-ic">
                    <i class="fab fa-twitter fa-lg white-text"></i>
                </a>
                <a class="ins-ic">
                    <i class="fab fa-instagram fa-lg white-text ml-2"></i>
                </a>
            </div>
        </div>
    </div>
</div>
<div class="footer-copyright text-center py-1">© 2020 Derechos Reservados:
    <a href=#> AliShock</a>
</div>
</footer>`

let modalServicios =
    `<div class="modal fade bd-example-modal-lg" id="modalPush" tabindex="-1" role="dialog"
aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <!--Content-->
    <div class="modal-content">
        <!--Header-->
        <div class="modal-header">
            <p class="heading">AliShock - Servicios</p>

            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" class="white-text">&times;</span>
            </button>
        </div>

        <!--Body-->
        <div class="modal-body">

            <div class="row">
                <div class="col-sm-5" id="imagen-modal">
                    <img :src = "imagenM" width="90%" alt="">
                </div>
                <div class="col-sm-7" id="app-modal">
                    <p><strong>{{titulo}}</strong></p>
                    <p class="text-justify">{{descripcion}}</p>
                </div>
            </div>
        </div>
        <!--<div class="modal-footer">
            <button type="button" class="btn btn-dark btn-sm float-right" data-dismiss="modal">Cerrar</button>
        </div>-->
    </div>
</div>
</div>
`
let modalNosotros =
    `   <div class="modal fade bd-example-modal-lg" id="modalPush1" tabindex="-1" role="dialog"
aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <!--Content-->
    <div class="modal-content">
        <!--Header-->
        <div class="modal-header">
            <p class="heading">AliShock - Nosotros</p>

            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" class="white-text">&times;</span>
            </button>
        </div>

        <!--Body-->
        <div class="modal-body">

            <div class="row">
                <div class="col-sm-5" id="imagen-modal">
                    <img src="img/nosotros.jpg" width="70%" class="mx-auto d-block" alt="">
                </div>
                <div class="col-sm-7" id="app-modal1">
                    <p class="text-justify nosotros">
                        Alishock nació en el año 2016 con el propósito de realzar la belleza natural de cada
                        persona.
                        Nuestra misión es obtener la imagen deseada por los clientes, fortificando su
                        autoestima.
                        Brindamos atención y servicio personalizado que transciende lo estético y crea
                        relaciones de impacto con los clientes.<br><br>
                        Para nosotros lo más importante son nuestras clientas/es.
                        Nos especializamos en Alisados, Shock, Botox y otros.. Trabajamos con los mejores
                        productos del mercado.
                        Damos garantía y soporte pos tratamiento por todos nuestros trabajos.
                    </p>
                </div>
            </div>
        </div>
        <!--<div class="modal-footer">
            <button type="button" class="btn btn-dark btn-sm float-right" data-dismiss="modal">Cerrar</button>
        </div>-->
    </div>
</div>
</div>
`

let modalCarrusel =
    `
<div class="modal fade bd-example-modal-lg" id="modalImagenes" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <!--Content-->
            <div class="modal-content">
                <!--Header-->
                <div class="modal-header">
                    <p class="heading">AliShock - Carusel de Imagenes</p>

                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" class="white-text">&times;</span>
                    </button>
                </div>

                <!--Body-->
                <div class="modal-body bodyCarrusel">

                    <div class="row">
                        <div class="col-sm-12" id="imagen-modal">
                            <div class="wrapper">
                                <div class="owl-carousel owl-theme">

                                    `
for (let i = 0; i < imgC.length; i++) {
    modalCarrusel += `<div class="item" style="background-image:url(${imgC[i]})" id="img0${i}"></div>`
}
modalCarrusel += `
                            </div>
                                </div>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `

let modalCarruselVideos =
    `
<div class="modal fade bd-example-modal-lg" id="modalVideos" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <!--Content-->
            <div class="modal-content">
                <!--Header-->
                <div class="modal-header">
                    <p class="heading">AliShock - Carusel de Videos</p>

                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" class="white-text">&times;</span>
                    </button>
                </div>

                <!--Body-->
                <div class="modal-body bodyCarrusel">

                    <div class="row">
                        <div class="col-sm-12" id="imagen-modal">
                            <div id="carousel-thumb" class="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel" data-interval="false">
                                <div class="carousel-inner"  role="listbox">   

                                    `
for (let i = 0; i < videosC.length; i++) {
    if (i==0) {
        modalCarruselVideos += `    <div class="carousel-item active">${videosC[i]} class="mx-auto d-block videos" alt="slide ${i}"></iframe></div>`   
    } else {
        modalCarruselVideos += `    <div class="carousel-item">${videosC[i]} class="mx-auto d-block videos" alt="slide ${i}"></iframe></div>`
    }
    
}
modalCarruselVideos += `
                                </div>
                                <a class="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>  
                                <ol class="carousel-indicators">`
for (let i = 0; i < videosC.length; i++) {
    if (i==0) {
        modalCarruselVideos += `<li data-target="#carousel-thumb active" data-slide-to="${i}"></li>`  
    } else{
        modalCarruselVideos += `<li data-target="#carousel-thumb" data-slide-to="${i}"></iframe></li>`
    }
    
}                                
modalCarruselVideos += `                               
                                </ol>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `

// Galeria de Imagenes

let modalGaleriaImagenes =
    `
    <div class="modal fade bd-example-modal-lg" id="modalGImagenes" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <!--Content-->
            <div class="modal-content">
                <!--Header-->
                <div class="modal-header">
                    <p class="heading">AliShock - Galeria de Imagenes</p>

                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" class="white-text">&times;</span>
                    </button>
                </div>

                <!--Body-->
                <div class="modal-body bodyGal">
                    <div class="container page-top">
                        <div class="row" id="gal_Imagenes">`                                                  
for (let i = 0; i < imgC.length; i++) {
    modalGaleriaImagenes += `<div class="col-lg-3 col-md-4 col-xs-6 thumb">                           
                                    <img id="imagenG${i}" src="${imgC[i]}" class="zoom img-fluid "  alt="" @click="abrirImagenGal(${i})" data-toggle="modal" data-target="#myModal">
                            </div>`
}
modalGaleriaImagenes += `                                
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `

let modalGal = `
    <div id="myModal" class="modal modalG" tabindex="0" role="dialog">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" data-toggle="modal" data-target="#modalGImagenes">
            <span aria-hidden="true" class="white-text">&times;</span>
        </button>
        <img class="modal-content modal-contentG" id="imgen01">
        <br>
        <!--<div id="caption"></div>-->
    </div>
`
let modalGaleriaVideos =
    `
    <div class="modal fade bd-example-modal-lg" id="modalGVideos" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <!--Content-->
            <div class="modal-content">
                <!--Header-->
                <div class="modal-header">
                    <p class="heading">AliShock - Galeria de Videos</p>

                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" class="white-text">&times;</span>
                    </button>
                </div>

                <!--Body-->
                <div class="modal-body bodyGal">
                    <div class="container page-top">
                        <div class="row" id="gal_Imagenes">`                                                  
for (let i = 0; i < videosC.length; i++) {
    modalGaleriaVideos += ` <div class="col-lg-4 col-md-6 col-xs-12 thumb">                           
                                <div class="zoom img-fluid mx-auto d-block altoyancho">${videosC[i]} alt="slide ${i}"></iframe></div>
                            </div>`
}
modalGaleriaVideos += `                                
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `

document.getElementById('idHeader').innerHTML = encabezado;
document.getElementById('modalServ').innerHTML = modalServicios;
document.getElementById('modalNosotros').innerHTML = modalNosotros;
document.getElementById('modalCarrusel').innerHTML = modalCarrusel;
document.getElementById('modalGaleriaImagenes').innerHTML = modalGaleriaImagenes;
document.getElementById('modalCarruselVideos').innerHTML = modalCarruselVideos;
document.getElementById('modalGaleriaVideos').innerHTML = modalGaleriaVideos;
document.getElementById('modalGal').innerHTML = modalGal;
document.getElementById('idFooter').innerHTML = pieDePagina;

