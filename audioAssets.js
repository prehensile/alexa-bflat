'use strict';
const path = require('path');

var audioData = {
    title: "In B Flat",
    parts: [
        "0001.mp3",
        "0002.mp3",
        "0003.mp3",
        "0004.mp3",
        "0005.mp3",
        "0006.mp3",
        "0007.mp3",
        "0008.mp3",
        "0009.mp3",
        "0010.mp3",
        "0011.mp3",
        "0012.mp3",
        "0013.mp3",
        "0014.mp3",
        "0015.mp3",
        "0016.mp3",
        "0017.mp3",
        "0018.mp3",
        "0019.mp3",
        "0020.mp3"
    ]
};

function randomPart(){
    var parts = audioData.parts;
    var idx = Math.floor( Math.random() * parts.length );
    // assume that the URL for the S3 bucket holding the above audio files is in an ENV var called S3_ROOT
    var s3BucketRoot = process.env.S3_ROOT;
    var url = path.join( parts[ idx ], s3BucketRoot );
    return {
        'url' : url,
        'index' : idx
    };
}

module.exports = {
    randomPart: randomPart
};
