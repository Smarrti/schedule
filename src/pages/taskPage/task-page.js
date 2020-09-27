import React from 'react';
import { Modal, Avatar, Empty, Input } from 'antd';
import { UserOutlined, 
         CalendarOutlined, 
         ClockCircleOutlined } from '@ant-design/icons';
import { YMaps, Map } from 'react-yandex-maps';
import './task-page.css'

const TaskPage = (props) => {
    const {content, onPageClose, visible } = props;

    const { TextArea } = Input;

    return(
        <Modal 
          title={`${content.type || 'Мероприятие'} - ${content.name}`}
          centered
          visible={visible}
          okText="Оставить отзыв"
          onOk={() => onPageClose()}
          onCancel={() => onPageClose()}
        >
          <div className="modal-block">
            <div className="modal-line">
              <CalendarOutlined />
              <span>{content.date}</span>
            </div>
            <div className="modal-line">
              <ClockCircleOutlined />
              <span>{content.time}</span>
            </div>
            <div className="modal-line">
              <span className="material-icons">timelapse</span>
              <span>{content.duration}</span>
            </div>
          </div>
          <div className="modal-line">
            <Avatar icon={<UserOutlined />} />
            <span>{content.author}</span>
          </div>
          <div className="modal-options">
            <span>Дополнительная информация, полезные ссылки, фото и видео:</span>
            {content.optional === '' ? <Empty /> : <span>{content.optional}</span>}          
          </div>
          <div className="modal-line">
            <span className="material-icons">location_on</span>
            <span>{content.place}</span>
          </div >
          <YMaps>
            <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
          </YMaps>
          <div>
            <span>Оставьте свой отзыв</span>
            <TextArea />
          </div>
        </Modal>
    )
};

export { TaskPage };