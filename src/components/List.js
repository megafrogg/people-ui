import React from 'react';

const ListItem = ({data, selectAction}) =>
  <li style={({width: '60vw'})} className="mdl-list__item mdl-list__item--three-line">
    <span className="mdl-list__item-primary-content">
      <i className="material-icons mdl-list__item-avatar">person</i>
      <span>{data.name.first + " " + data.name.last}</span>
      <span className="mdl-list__item-text-body">
        {data.about}
      </span>
    </span>
    <span className="mdl-list__item-secondary-content">
      <a onClick={() => selectAction(data)} className="mdl-list__item-secondary-action" href="#"><i className="material-icons">star</i></a>
    </span>
  </li>;

const listStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}

const FullList = (props) =>
  <section>
    <h2>People UI ({props.items.length})</h2>
    <ul style={listStyle} className="demo-list-three mdl-list">{props.items.map(item => <ListItem key={item.id} data={item} selectAction={props.action} />)}</ul>;
  </section>;

export default FullList;
