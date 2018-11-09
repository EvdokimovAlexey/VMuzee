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

const UserRequest = props => (
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
