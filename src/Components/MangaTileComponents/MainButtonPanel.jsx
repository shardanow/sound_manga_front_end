import React from "react";

export default function MainButtonPanel() {
    return(
        <div className="mainBtnPanel">
            <div className="mainBtnPanel_overview">
                <button>
                    Overviev
                </button>
            </div>

            <div className="mainBtnPanel_volumes">
                <button>
                    Volumes
                </button>
            </div>

            <div className="mainBtnPanel_discussion">
                <button>
                    Discussion
                </button>
            </div>
        </div>
    )
}