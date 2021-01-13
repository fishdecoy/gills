const React = require('react');

const baseHeader = "header-container";

const GillsHeader = (props) => {
    return(
        <div className={baseHeader + ' flex'}>
            <div className={baseHeader + '_info flex flex-start flex-column'}>
                <span className="profile profile-name">Pedro</span>
                <span className="profile profile-lastName">Marcano</span>
                <span className="profile profile-info">Software enginere // 33 Years</span>
            </div>
            <div className={baseHeader + ' flex flex-end'}>
                <span className="photo"></span>
            </div>
            <div className={baseHeader + ' social flex flex-start flex-column'}>
                <span className="social-item flex">
                    <p className="social-item_icon"></p>
                    <span className="social-item_text">pg.delbert@gmail.com</span>
                </span>
                <span className="social-item flex">
                    <i className="social-item_icon"></i>
                    <span className="social-item_text">pg.delbert@gmail.com</span>
                </span>
                <span className="social-item flex">
                    <i className="social-item_icon"></i>
                    <span className="social-item_text">pg.delbert@gmail.com</span>
                </span>
                <span className="social-item flex">
                    <i className="social-item_icon"></i>
                    <span className="social-item_text">pg.delbert@gmail.com</span>
                </span>
                <span className="social-item flex">
                    <i className="social-item_icon"></i>
                    <span className="social-item_text">pg.delbert@gmail.com</span>
                </span>

                
            </div>
        </div>
    )
};

export default GillsHeader;
