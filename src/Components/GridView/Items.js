import React, { useState } from "react";
import "./Style.css";
import moment from "moment";

function Component(props) {
  const [play, setPlay] = useState(false);

  function dateDiff(date1) {
    return moment(date1).fromNow();
  }
  function description() {
    return props.data.publishingDescription ? (
      <React.Fragment>
        <p>
          {props.data.publishingDescription
            .replace(/(<([^>]+)>)/g, "")
            .substring(0, 150)}
          {props.data.publishingDescription.length > 150 && (
            <a
              className="read-more"
              title="Read More"
              href="/videos/view/1037609"
            >
              ...
            </a>
          )}
        </p>
      </React.Fragment>
    ) : (
      <div />
    );
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
        src={`https://www.youtube.com/embed/${getVideoId()}?autoplay=1&amp;autohide=1&amp;border=0&amp;wmode=opaque&amp;enablejsapi=1&amp;playerapiid=${getVideoId()}`}
        className="youtube-iframe"
      />
    ) : (
      <div
        onClick={() => {
          setPlay(true);
        }}
        className="play-bt play-video-bt-grid"
      />
    );
  }

  return (
    <div className="box-center">
      <div className="grid-box">
        <div className="gridPostedDate">
          <p>
            Posted:{" "}
            <span
              date="2019-05-08T05:16:33Z"
              ng-bind="video.signedDate | timeAgo:'MM.dd.yyyy'"
              className="ng-binding"
            >
              {dateDiff(props.data.signedDate)}
            </span>
          </p>
        </div>
        <div className="youtube gridPlayer" title={props.data.title}>
          {playVideo()}
          <img
            className="gridThumb"
            alt={props.data.title}
            src={props.data.imgUrl}
          />
        </div>
        <table className="view-trending">
          <tbody>
            <tr>
              <td>
                <div className="gridViewIcon">
                  <p>
                    <span ng-bind="video.views | number" className="ng-binding">
                      {props.data.views}
                    </span>{" "}
                    Views
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="gridTitle">
          <h2 className="ng-scope">
            <span>{props.data.title}</span>
          </h2>
        </div>
        <div className="gridDescription">
          <div>{description()}</div>
        </div>
        <div className="clearer" />
        <div className="gridUploadIcon">
          <p>
            Original Upload Date:
            <span className="bold pull-right">
              {moment(props.data.originalPublishingDate).format("MM.DD.YYYY")}
            </span>
          </p>
        </div>
        <div className="clearer" />
        <div className="gridJVId ng-scope" ng-if="video.jmId">
          <p>
            <span
              ng-if="!video.linkable"
              ng-bind="video.jmId"
              className="ng-binding ng-scope"
            >
              {props.data.jmId}
            </span>
            <a href="/videos/view/1037609">
              <button className="pull-right jukin-bt gridLicenseBt">
                License This Video
              </button>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Component;
