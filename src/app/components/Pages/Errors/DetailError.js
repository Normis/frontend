import * as m from "mithril";
import "./detailerror.scss";

export default {

    view({attrs, children}) {
        return (
            <div className="detailerror">
                <div className="detailerror-title">{attrs.title}</div>
                <div className="detailerror-content">
                    <div className="detailerror-message">
                        {children}
                    </div>
                </div>
            </div>
        );
    }
};