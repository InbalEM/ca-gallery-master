"use strict"


function initPage() {
    console.log('Starting up');
    renderPortfolio()
}

function renderPortfolio(){
    const projects = getProj()
    var strHtmls = projects.map(proj => 
        `
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="${proj.url}">
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
        
}