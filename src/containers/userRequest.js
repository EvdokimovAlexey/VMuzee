import React, {Component} from 'react';
import { Panel, PanelHeader, View, FormLayout, Select, File, platform, Button, IOS, Textarea, Div, HeaderButton } from '@vkontakte/vkui';
import {connect} from 'react-redux';
import autoBind from 'react-autobind';
/*import * as timeActions from '../store/time/actions'
import * as timeSelectors from '../store/time/reducer'*/

import PropTypes from 'prop-types';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Camera from '@vkontakte/icons/dist/24/camera';

const osname = platform();

const thematics = [
    {id: 3201, name: "Аренда автомобилей"},
    {id: 3273, name: "Автотовары"},
    {id: 3205, name: "Автосалон"},
    {id: 3282, name: "Автосервис"},
    {id: 3283, name: "Услуги для автовладельцев"},
    {id: 3284, name: "Велосипеды"},
    {id: 3285, name: "Мотоциклы и другая мототехника"},
    {id: 3286, name: "Водный транспорт"},
    {id: 3287, name: "Автопроизводитель"},
    {id: 3288, name: "Автомойка"},
    {id: 3117, name: "Автошкола"},
    {id: 3118, name: "Детский сад"},
    {id: 3119, name: "Гимназия"},
    {id: 3120, name: "Колледж"},
    {id: 3121, name: "Лицей"},
    {id: 3122, name: "Техникум"},
    {id: 3123, name: "Университет"},
    {id: 3124, name: "Школа"},
    {id: 3125, name: "Институт"},
    {id: 3126, name: "Обучающие курсы"},
    {id: 3276, name: "Дополнительное образование"},
    {id: 3275, name: "Тренинг, семинар"},
    {id: 3127, name: "Танцевальная школа"}
  ];

const UserRequest = props => (
  <Panel id={props.id}>
    <PanelHeader left={<HeaderButton onClick={props.go} data-to="home">
      {osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
    </HeaderButton>}>Заявка</PanelHeader>
    <FormLayout>
      <Textarea top="Описание" placeholder="Оставтье описание заявки" />
      <Select top="Номер зала" placeholder="Выберите номер зала">
        {thematics.map(thematic => <option value={thematic.id}>{thematic.name}</option>)}
      </Select>
      <File top="Загрузите фото" before={<Icon24Camera />} size="l">
        Открыть галерею
      </File>
      <Button size="xl">Оставить заявку</Button>
    </FormLayout>
  </Panel>
);

UserRequest.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default UserRequest;
/*class UserRequest extends Component {

  constructor(props) {
    super(props);
    autoBind(this);
    // this.getActualTime = this.getActualTime.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(timeActions.fetchTime());
  }

  render() {
    return (
        <Panel id={props.id}>
          <PanelHeader left={<HeaderButton onClick={props.go} data-to="home">
    				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
    			</HeaderButton>}>Заявка</PanelHeader>
          <FormLayout>
            <Textarea top="Описание" placeholder="Оставтье описание заявки" />
            <Select top="Номер зала" placeholder="Выберите номер зала">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">2</option>
              <option value="4">2</option>
            </Select>
            <File top="Загрузите фото" before={<Icon24Camera />} size="l">
              Открыть галерею
            </File>
             <Div>
               <Button size="xl" level="secondary">Оставить заявку</Button>
             </Div>
          </FormLayout>
        </Panel>
    );
  }
}

function mapStateToProps(state) {
  console.log("mapStateToProps");
  return {
    lastTime: timeSelectors.getLastTime(state)
  };
}

export default connect(mapStateToProps)(UserRequest);*/
