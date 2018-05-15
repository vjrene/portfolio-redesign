import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import WorkGalleryItem from './WorkGalleryItem';

export default class WorkGallery extends Component {
  render() {
    return(
      <div className="section-work-gallery">
        <div className="work-gallery--cntr">
        
          <div className="work-gallery-item--full-cntr">
            <WorkGalleryItem
              slug="photography-page"
              background="https://thumb9.shutterstock.com/display_pic_with_logo/163998006/720605788/stock-vector-vector-floral-art-nouveau-pattern-geometric-decorative-leaves-texture-golden-retro-stylish-720605788.jpg"
              />
          </div>
          <div className="work-gallery-item--full-cntr">
            <WorkGalleryItem
              background="https://s3-eu-west-1.amazonaws.com/images.linnlive.com/46f002540b02bbcc49ff64da6bbb6eee/30a6b5c8-2828-46e7-8a4d-fe5485260e05.jpg" />
            </div>
          <div className="work-gallery-item--full-cntr">
            <WorkGalleryItem
            background="https://thumbnail-cloud.homeimprovementpages.com.au/unsafe/1100x0/smart/https://uploads.hipages.com.au/articles/7475/art_deco_1.jpg" />
          </div>
          <div className="work-gallery-item--full-cntr">
            <WorkGalleryItem 
              background="https://www.calendarclub.co.uk/resize/main/-/media/productimages/20/46/204628_main.jpg"/>
          </div>
          <div className="work-gallery-item--full-cntr">
            <WorkGalleryItem
              background="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAkKKoqeFs9432aVoUoYr1kZxEatJ1Fv5auxMRzLzdHgJ-6zW-Yg" />
          </div>
          <div className="work-gallery-item--full-cntr">
            <WorkGalleryItem
              background="https://image.shutterstock.com/z/stock-vector-art-deco-style-seamless-pattern-texture-129256289.jpg" />
          </div>
          <div className="work-gallery-item--full-cntr">
            <WorkGalleryItem 
              background="http://www.deco-vitres.com/WebRoot/ce_fr3/Shops/221658/51DA/6B19/A115/86C6/A87B/3EC1/CD0B/9D91/gros-plan-sticker-electrostatique-ou-adhesif-effet-vitrail-deco-vitres-fenetre-art-deco-nouveau-fleur-VIT136.jpg"/>
          </div>
        </div>
      </div>
    )
  }
}