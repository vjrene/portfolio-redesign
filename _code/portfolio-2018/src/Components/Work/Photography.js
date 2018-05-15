import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageHerospace from '../Navigation/PageHerospace';
import Slider from './Slider';

export default class WorkGallery extends Component {
  render() {
    return (
      <div className="app-page photography-page--cntr">
        <PageHerospace
          pageTitle="but, beautiful"
          subpageTitle="photography"
        />

        <div className="back--work">
          <Link className="main-btn" to={"/all-work"}><i class="fas fa-arrow-left"></i> view Work</Link>
        </div>

        <div className="photography-entry--cntr">
          <Slider />

          <div className="photography-entry--art_cntr">

            <div className="photography-entry--featured">
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Janelle_Mon%C3%A1e_in_2016.jpg" />
            </div>

            <div className="photography-entry--poem_cntr">
              <div className="photography-entry--poem_title">
                <h3 className="poem_text">One Spring day in brooklyn</h3>
               </div>
              <div className="photography-entry--info_cntr"></div>
            </div>
          
          </div>

        </div>
      </div>
    )
  }
}
