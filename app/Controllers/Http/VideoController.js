'use strict';
const Video = use('App/Models/Video');

class VideoController {

  async all({response}) {
    let videos = await Video.query().fetch();
    return response.json(videos);
  }

  async findInOwnDatabase({params, request, response}) {
    let videos = await Video.query().where('title', 'LIKE', '%'+params.title+'%').fetch();
    return response.json(videos);
  }

  async store({request, response}) {
    const title = request.input('title');
    const url = request.input('url');

    const video = new Video();
    video.title = title;
    video.url = url;
    video.save();

    response.json({title: title, url: url});
  }

}

module.exports = VideoController;
