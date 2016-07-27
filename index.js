var jsffmpeg = require('js-ffmpeg');


Scoped.define("jsonize:JsonizeFfprobeTask", [
    "jsonize:AbstractJsonizeTask",
    "jsonize:JsonizeTaskRegistry",
    "betajs:Promise"
], function (Class, TaskRegistry, Promise, scoped) {
	var Cls = Class.extend({scoped: scoped}, {
		
		_run: function (payload) {
			return jsffmpeg.ffprobe(payload.source);
		}
			
	});
	
	TaskRegistry.register("ffprobe", Cls);
	
	return Cls;
});


Scoped.define("jsonize:JsonizeFfprobeSimpleTask", [
     "jsonize:AbstractJsonizeTask",
     "jsonize:JsonizeTaskRegistry",
     "betajs:Promise"
], function (Class, TaskRegistry, Promise, scoped) {
 	var Cls = Class.extend({scoped: scoped}, {
 		
 		_run: function (payload) {
 			return jsffmpeg.ffprobe_simple(payload.source);
 		}
 			
 	});
 	
 	TaskRegistry.register("ffprobe-simple", Cls);
 	
 	return Cls;
});


Scoped.define("jsonize:JsonizeFfmpegTask", [
     "jsonize:AbstractJsonizeTask",
     "jsonize:JsonizeTaskRegistry",
     "betajs:Promise"
], function (Class, TaskRegistry, Promise, scoped) {
 	var Cls = Class.extend({scoped: scoped}, {
 		
 		_run: function (payload) {
 			return jsffmpeg.ffmpeg(
 				payload.source || payload.sources,
 				payload.options || [],
 				payload.output,
 				this._event,
 				this
 			);
 		}
 			
 	});
 	
 	TaskRegistry.register("ffmpeg", Cls);
 	
 	return Cls;
});


Scoped.define("jsonize:JsonizeFfmpegMultiPassTask", [
	  "jsonize:AbstractJsonizeTask",
	  "jsonize:JsonizeTaskRegistry",
	  "betajs:Promise"
], function (Class, TaskRegistry, Promise, scoped) {
  	var Cls = Class.extend({scoped: scoped}, {
  		
  		_run: function (payload) {
  			return jsffmpeg.ffmpeg_multi_pass(
  				payload.source || payload.sources,
  				payload.options || [],
  				2,
  				payload.output,
  				this._event,
  				this
  			);
  		}
  			
  	});
  	
  	TaskRegistry.register("ffmpeg-multi-pass", Cls);
  	
  	return Cls;
});


Scoped.define("jsonize:JsonizeFfmpegSimpleTask", [
    "jsonize:AbstractJsonizeTask",
    "jsonize:JsonizeTaskRegistry",
    "betajs:Promise"
], function (Class, TaskRegistry, Promise, scoped) {
	var Cls = Class.extend({scoped: scoped}, {
		
		_run: function (payload) {
			return jsffmpeg.ffmpeg_simple(
				payload.source || payload.sources,
				payload.options || {},
				payload.output,
				this._event,
				this
			);
		}
			
	});
	
	TaskRegistry.register("ffmpeg-simple", Cls);
	
	return Cls;
});


Scoped.define("jsonize:JsonizeFfmpegVolumeDetectTask", [
	"jsonize:AbstractJsonizeTask",
	"jsonize:JsonizeTaskRegistry",
	"betajs:Promise"
], function (Class, TaskRegistry, Promise, scoped) {
	var Cls = Class.extend({scoped: scoped}, {
		
		_run: function (payload) {
			return jsffmpeg.ffmpeg_volume_detect(payload.source);
		}
			
	});
	
	TaskRegistry.register("ffmpeg-volume-detect", Cls);
	
	return Cls;
});
