"use strict"


function initPage() {
    console.log('Starting up');
    renderPortfolio()
    // renderModal()
}

function renderPortfolio(){
    const projects = getProj()
    var strHtmls = projects.map(proj => 
        `
        <div class="col-md-4 col-sm-6 portfolio-item" data-id= "${proj.id}">
        <a class="portfolio-link"  data-id= "${proj.id}" data-toggle="modal" href="#portfolioModal1">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio/${proj.id}.jpg" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${proj.name}</h4>
            <p class="text-muted">${proj.desc}</p>
          </div>
        </div>
        `)
       
        $('.row.Portfolio').html(strHtmls)

        // $('.portfolio-link').on('click', renderModal(proj.id))

        $('.portfolio-link').on('click', function(){
            const projId = $(this).data('id')
            renderModal(projId)
        })



        // $('.cars-container').find('.btn-remove').on('click', function(){
        //     const carId = $(this).closest('article').data('id')
        //     onDeleteCar(carId)
        // })
        
}

function renderModal(id){
    const proj = findProj(id)

    $('.modal-body h2').text(proj.name)
    $('p.item-intro.text-muted').text(proj.title)
    $('.modal-body p').text(proj.desc)
    console.log($('.portfolio-link img'));
    $('.img-fluid.d-block.mx-auto').attr("src",`img/portfolio/${proj.id}.jpg`)
    $('.modal-body a').attr("href",`${proj.url}`)
    $('.btn.btn-primary.link-to-proj').attr("hrefs",`${proj.url}`)
    // const dateForDis = dateForDisplay(proj.publishedAt)
 
    const strHtmls = 
                    `
                    <li>Date: ${proj.publishedAt}</li>
                    <li>Client: ${proj.client}</li>
                    <li>Category: ${proj.labels}</li>
                    `

    $('.list-inline').html(strHtmls)

}
