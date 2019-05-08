import React, { useState } from "react";
import "./Style.css";
import { Button } from "..";
import moment from "moment";

function Component(props) {
  const [play, setPlay] = useState(false);

  function dateDiff(date1) {
    return moment(date1).fromNow();
  }

  function getVideoId() {
    let params = new URL(props.data.videoUrl).searchParams;
    return params.get("v"); // "1"
  }
  function playVideo() {
    return play ? (
      <iframe
        title={props.data.title}
        allowFullScreen={true}
        src={`https://www.youtube.com/embed/${getVideoId()}?autoplay=1}`}
        className="youtube-iframe"
      />
    ) : (
      <div
        onClick={() => {
          setPlay(true);
        }}
        className="play-bt play-video-bt"
      />
    );
  }

  return (
    <div className="box-center">
      <div className="list-box">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="listPostedDate">
              <p>
                Posted:{" "}
                <span date="2019-05-07T11:58:03Z" className="ng-binding">
                  {dateDiff(props.data.signedDate)}
                </span>
              </p>
            </div>
            <div
              className="youtube listPlayer"
              title="Guy Learning Surfing on Simulator Faceplants into Water"
              ng-click="playButton($event, video.wirePlatformVideoId, video.wirePlatform, 'videoPlayedListView', video.jmId)"
            >
              {playVideo()}
              <img
                className="listThumb"
                alt="Guy Learning Surfing on Simulator Faceplants into Water"
                src={props.data.imgUrl}
              />
            </div>
            <a ng-href="/videos/view/1040602" href="/videos/view/1040602">
              <h2>
                <span>{props.data.title}</span>
              </h2>
            </a>
          </div>

          <div className="col-md-6 col-sm-12">
            <div className="clearer" />
            <div className="list-detail">
              <div className="listViewIcon">
                <p>
                  <span>{props.data.views}</span> Views
                </p>
              </div>
              <div className="clearer" />
              <div className="listUploadIcon">
                <p>
                  Original Upload Date:
                  <span
                    className="bold pull-right ng-binding"
                    ng-bind="video.originalPublishingDate | timeAgo:'MM.dd.yyyy'"
                  >
                    {dateDiff(props.data.originalPublishingDate)}
                  </span>
                </p>
              </div>
              <div className="clearer" />
              <div className="listJVId ng-scope">
                <p>
                  JV#:
                  <a ng-href="/videos/view/1040602" href="/videos/view/1040602">
                    <span className="bold pull-right ng-binding">
                      {props.data.jmId}
                    </span>
                  </a>
                </p>
              </div>
              {props.data.publishingDescription && (
                <React.Fragment>
                  <div className="listDescription ng-scope">
                    <h4>Video Description</h4>
                    <p>
                      {props.data.publishingDescription
                        .replace(/(<([^>]+)>)/g, "")
                        .substring(0, 170)}
                      {props.data.publishingDescription.length > 170 && (
                        <a
                          className="read-more"
                          title="Read More"
                          href="/videos/view/1037609"
                        >
                          ...
                        </a>
                      )}
                    </p>
                  </div>
                  <Button style={{ marginLeft: 40 }}>License This Video</Button>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
