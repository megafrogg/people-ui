import React, {Component} from 'react';

export default class DialogCard extends Component {

  componentDidMount() {
    this.refName = this.refs.diaCard;
    this.initMap(this.refs.map, {lat: +this.props.user.latitude, lng: +this.props.user.longitude});
  }

  render() {
    return <dialog ref="diaCard" className="mdl-dialog" style={({height: '40vw', width: '60vw'})}>
      <h4 className="mdl-dialog__title">{this.props.user.name.first}</h4>
      <div style={({height: '80%'})} className="mdl-dialog__content">
        <div id="mapItem" ref="map">

        </div>
      </div>
      <div className="mdl-dialog__actions">
        <button type="button" className="mdl-button close" onClick={()=> this.refs.diaCard.close()}>Close</button>
      </div>
    </dialog>
  }

  initMap(ref, location) {
    return new google.maps.Map(ref, {
      center: location,
      zoom: 8
    });
  }
}
