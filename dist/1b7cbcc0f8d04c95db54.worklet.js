!function(t){var e={};function i(s){if(e[s])return e[s].exports;var r=e[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(s,r,function(e){return t[e]}.bind(null,r));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/junox/dist/",i(i.s="5GTi")}({"5GTi":function(t,e,i){"use strict";i.r(e);var s=i("lwsE"),r=i.n(s),n=i("W8MJ"),a=i.n(n),h=function(){function t(e,i){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5;r()(this,t),this.b1=-Math.exp(-2*s*Math.PI/i),this.a0=1+this.b1,this.targetValue=e,this.isStarted=!1,this.z1=0,this.reset()}return a()(t,[{key:"setValue",value:function(t,e){this.targetValue=t,this.isStarted&&e||this.reset()}},{key:"reset",value:function(){this.z1=this.targetValue*this.a0-this.targetValue,this.isStarted=!1}},{key:"getNextValue",value:function(){this.isStarted=!0;var t=this.targetValue*this.a0-this.z1;return this.z1=this.b1*t,t}}]),t}(),u=function(){function t(e){r()(this,t),this.sampleRate=e,this.currentPhase=0,this.phaseIncrement=0,this.pulseWidth=.5,this.pulsePositive=1,this.pulseNegative=-1,this.pulseHeight=1,this.subOutput=1}return a()(t,[{key:"noteOn",value:function(t){var e=442*Math.pow(2,(t-69)/12);this.phaseIncrement=e/this.sampleRate,this.currentPhase=1.1}},{key:"render",value:function(t,e,i,s,r){var n=this.phaseIncrement*t,a=this.currentPhase;this.currentPhase+=n,this.currentPhase>1&&(this.currentPhase-=1,this.pulseWidth=.5-.45*e,this.pulsePositive=1-.95*e,this.pulseNegative=-1,this.pulseHeight=.45*(this.pulsePositive-this.pulseNegative));var h=0;i>0&&(h=this.currentPhase+this.currentPhase-1,h-=this.calcPolyBLEP2(this.currentPhase,n,1));var u=0;if(s>0){u=this.currentPhase>this.pulseWidth?this.pulsePositive*=.998:this.pulseNegative*=.998,u-=this.calcPolyBLEP2(this.currentPhase,n,this.pulseHeight);var o=this.currentPhase-this.pulseWidth;u+=this.calcPolyBLEP2(o<0?o+1:o,n,this.pulseHeight)}var c=this.subOutput*=.998,f=this.currentPhase-.5;if(f<n&&f>-n){f<0&&(f+=1);var l=c;this.currentPhase>=.5&&a<.5&&(this.subOutput=c=c>0?-1:1),c-=this.calcPolyBLEP2(f,n,l)}return h*i+u*s+c*r}},{key:"calcPolyBLEP2",value:function(t,e,i){var s=0;if(t<e){var r=t/e;s=i*(r+r-r*r-1)}else if(t+e>1){var n=(t-1)/e;s=i*(n*n+(n+n)+1)}return s}}]),t}(),o=i("7W2i"),c=i.n(o),f=i("a1gu"),l=i.n(f),p=i("Nsbk"),v=i.n(p),d=i("lSNA"),_=i.n(d);function y(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return m(t,e)}(t))){var e=0,i=function(){};return{s:i,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,r,n=!0,a=!1;return{s:function(){s=t[Symbol.iterator]()},n:function(){var t=s.next();return n=t.done,t},e:function(t){a=!0,r=t},f:function(){try{n||null==s.return||s.return()}finally{if(a)throw r}}}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,s=new Array(e);i<e;i++)s[i]=t[i];return s}var g=function(){function t(){var e=this;r()(this,t),_()(this,"_segments",[]),_()(this,"_currentPhase",-1),_()(this,"_currentValue",0),_()(this,"isFinished",(function(){return-1===e._currentPhase})),_()(this,"isReleased",(function(){return 0!==e.currentPhase&&1!==e.currentPhase})),_()(this,"isShuttingDown",(function(){return e.currentPhase===e._segments.length-1}))}return a()(t,[{key:"trigger",value:function(){this._currentPhase=0;var t,e=y(this._segments);try{for(e.s();!(t=e.n()).done;){t.value.reset()}}catch(t){e.e(t)}finally{e.f()}}},{key:"release",value:function(){-1!==this._currentPhase&&(this._currentPhase=this._segments.length-2)}},{key:"shutdown",value:function(){-1!==this._currentPhase&&(this._currentPhase=this._segments.length-1)}},{key:"reset",value:function(){this._currentPhase=-1,this._currentValue=0;for(var t=0;t<this._segments.length;t++)this._segments[t].reset()}},{key:"render",value:function(){for(;-1!==this._currentPhase&&this._currentPhase<this._segments.length;){var t=this._segments[this._currentPhase],e=t.process(this._currentValue);if(!t.isComplete(e)){this._currentValue=e;break}this._currentPhase++,this._currentPhase>=this._segments.length&&(this._currentValue=0,this._currentPhase=-1)}return this._currentValue}}]),t}(),P=function(){function t(e,i,s,n){var a=this;r()(this,t),_()(this,"isComplete",(function(t){return t>a.target})),this._sampleRate=e,this._attackTCO=i,this._attackCoeff=0,this._attackOffset=0,this._isSustainAtEnd=n,this.target=s}return a()(t,[{key:"setDuration",value:function(t){var e=this._sampleRate*t;this._attackCoeff=Math.exp(-Math.log((1+this._attackTCO)/this._attackTCO)/e),this._attackOffset=(1+this._attackTCO)*(1-this._attackCoeff)}},{key:"reset",value:function(){}},{key:"process",value:function(t){var e=t*this._attackCoeff+this._attackOffset;return e>this.target&&this._isSustainAtEnd?this.target:e}}]),t}(),k=function(){function t(e,i,s,n){var a=this;r()(this,t),_()(this,"isComplete",(function(t){return t<=a.target&&!a._isSustainAtEnd||t<.02})),this._sampleRate=e,this._decayTCO=i,this._decayCoeff=0,this._decayOffset=0,this._isSustainAtEnd=n,this.target=s}return a()(t,[{key:"setDuration",value:function(t){var e=this._sampleRate*t;this._decayCoeff=Math.exp(-Math.log((1+this._decayTCO)/this._decayTCO)/e),this._decayOffset=(this.target-this._decayTCO)*(1-this._decayCoeff)}},{key:"reset",value:function(){}},{key:"process",value:function(t){var e=t*this._decayCoeff+this._decayOffset;return e<this.target&&this._isSustainAtEnd?this.target:e}}]),t}(),b=function(){function t(e){var i=this;r()(this,t),_()(this,"_delaySampleCount",0),_()(this,"_currentRemaining",0),_()(this,"isComplete",(function(){return i._currentRemaining<=0})),this._sampleRate=e}return a()(t,[{key:"setDuration",value:function(t){var e=this._sampleRate*t|0;this._currentRemaining+=e-this._delaySampleCount,this._delaySampleCount=e}},{key:"reset",value:function(){this._currentRemaining=this._delaySampleCount}},{key:"process",value:function(t){return this._currentRemaining--,t}}]),t}(),w=function(){function t(e,i){r()(this,t),_()(this,"isComplete",(function(t){return t<=0})),this._shutdownRate=1/(i*e)}return a()(t,[{key:"reset",value:function(){}},{key:"process",value:function(t){var e=t-this._shutdownRate;return this.value<0?0:e}}]),t}();Math.sqrt(2),Math.PI,Math.PI;function x(t){if(t<-3)return-1;if(t>3)return 1;var e=t*t;return t*(27+e)/(27+9*e)}function O(t,e){if(t<=0)return e[0];if(t>=1)return e[e.length-1];var i=0|(t*=e.length-1),s=t-i;return 0===s?e[i]:e[i]*(1-s)+e[i+1]*s}function V(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,s=v()(t);if(e){var r=v()(this).constructor;i=Reflect.construct(s,arguments,r)}else i=s.apply(this,arguments);return l()(this,i)}}var R=[.001,.03,.24,.65,3.25],S=[.002,.096,.984,4.449,19.783],M=[.002,.096,.984,4.449,19.783],C=function(t){c()(i,t);var e=V(i);function i(t){var s;return r()(this,i),(s=e.call(this))._segments=[s._attack=new P(t,.632,1,!1),s._decay=new k(t,.025,0,!0),s._release=new k(t,.025,0,!1),s._shutdown=new w(t,.001)],s}return a()(i,[{key:"setValues",value:function(t,e,i,s){this._attack.setDuration(t),this._decay.target=Math.max(.02,i),this._decay.setDuration(e),this._release.setDuration(this._decay.target<=.02?.01:s)}},{key:"setValuesFromSliders",value:function(t,e,i,s){var r=O(t,R),n=O(e,S),a=O(s,M);this.setValues(r,n,i,a)}}]),i}(g),L=function(){function t(e){r()(this,t),this.cutoffToNormalizedFactor=2.32/e,this.resonance=0,this.reset()}return a()(t,[{key:"reset",value:function(){this._in1=0,this._in2=0,this._in3=0,this._in4=0,this._out1=0,this._out2=0,this._out3=0,this._out4=0}},{key:"trigger",value:function(t){this._out4+=t}},{key:"render",value:function(t,e){var i=e*this.cutoffToNormalizedFactor;i>1.16&&(i=1.16);var s=i*i,r=this.resonance*(1-.15*s),n=1-i;return t-=this._out4*r,t*=.35013*s*s,this._out1=t+.3*this._in1+n*this._out1,this._in1=t,this._out2=this._out1+.3*this._in2+n*this._out2,this._in2=this._out1,this._out3=this._out2+.3*this._in3+n*this._out3,this._in3=this._out2,this._out4=this._out3+.3*this._in4+n*this._out4,this._in4=this._out3,this._out4}}]),t}(),F=function(){function t(e,i){r()(this,t),_()(this,"_z1",0),this._b1=-Math.exp(-2*i*Math.PI/e),this._a0=1+this._b1}return a()(t,[{key:"render",value:function(){var t=(2*Math.random()-1)*this._a0-this._z1;return this._z1=this._b1*t,t}}]),t}(),E=function(){function t(e){var i=e.patch,s=e.sampleRate;r()(this,t),this.patch=i,this.sampleRate=s,this.note=-1,this.velocity=0,this.filterNoteFactor=0,this.dco=new u(s),this.noise=new F(s,5e3),this.modEnv=new C(s),this.ampEnv=new C(s),this.moogVCF=new L(s)}return a()(t,[{key:"render",value:function(t,e,i,s,r,n,a,h,u,o,c,f){var l=this.modEnv.render(),p=this.ampEnv.render(),v=i;"l"===this.patch.dco.pwmMod?v*=.5*t+.5:"e"===this.patch.dco.pwmMod&&(v*=l);var d=this.dco.render(e,v,s,r,n);a>0&&(d+=this.noise.render()*a);var _=l*o*12,y=200*h/12+c+f*this.filterNoteFactor+_+this.patch.vcf.resonance;y<8&&(d*=1+3*(.125*(8-y)));var m=7.8*Math.pow(2,y);m=function(t){if(t<1e4)return t*O(.002*t,I);return t}(m),this.moogVCF.resonance=3.99*u;var g=this.moogVCF.render(d,m);return this.velocity*g*p}},{key:"noteOn",value:function(t,e){if(t!==this.note||this.isFinished()){this.note=t,this.dco.noteOn(t),this.modEnv.reset(),this.ampEnv.reset(),this.moogVCF.reset();this.filterNoteFactor=(this.note-60)/60*5}if(!(this.patch.dco.saw||this.patch.dco.pulse||this.patch.dco.subAmount||this.patch.dco.noise)){var i=this.patch.vcf.resonance*this.patch.vcf.resonance*.2;this.moogVCF.trigger(i)}this.velocity=e,this.updatePatch(this.patch),this.modEnv.trigger(),this.ampEnv.trigger()}},{key:"noteOff",value:function(){this.modEnv.release(),this.ampEnv.release()}},{key:"isFinished",value:function(){return this.ampEnv.isFinished()}},{key:"updatePatch",value:function(t){var e=t.env;this.modEnv.setValuesFromSliders(e.attack,e.decay,e.sustain,e.release),"env"===t.vcaType?this.ampEnv.setValuesFromSliders(e.attack,e.decay,e.sustain,e.release):this.ampEnv.setValues(.00247,.0057,.98,.0057),this.patch=t}}]),t}();var I=[1,4,1.364446108,1.30021398,1.291615494,1.288268551,1.264147018,1.225067204,1.207675563,1.214457029,1.197350752,1.170175889,1.165266155,1.147560592,1.125353785,1.111233998,1.0918184,1.067975101,1.04060779,1.026150863,1.022347836,1],N=function(){function t(e){r()(this,t),this.buffer=new Float32Array(e),this.writeIndex=0,this.maxBufferSize=e}return a()(t,[{key:"ringBufferIndex",value:function(t){return t<0?t+this.maxBufferSize:t>=this.maxBufferSize?t-this.maxBufferSize:t}},{key:"readSample",value:function(t){var e=this.ringBufferIndex(this.writeIndex-t),i=Math.floor(e),s=e-i,r=this.ringBufferIndex(i+1);return this.buffer[i]*(1-s)+this.buffer[r]*s}},{key:"writeSample",value:function(t){this.buffer[this.writeIndex]=t,this.writeIndex=(this.writeIndex+1)%this.maxBufferSize}},{key:"reset",value:function(){this.buffer.fill(0)}}]),t}(),D=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;r()(this,t),_()(this,"_a0",1),_()(this,"_b1",0),_()(this,"_z1",0),this._piOverSampleRate=Math.PI/e,this.setCutoff(i)}return a()(t,[{key:"reset",value:function(){this._z1=0}},{key:"renderLP",value:function(t){var e=t*this._a0+this._z1;return this._z1=-this._b1*e,e}},{key:"renderHP",value:function(t){return t-this.renderLP(t)}},{key:"setCutoff",value:function(t){this._b1=-Math.exp(-2*t*this._piOverSampleRate),this._a0=1+this._b1}}]),t}(),T=function(){function t(e){r()(this,t),_()(this,"leftOutput",0),_()(this,"rightOutput",0),this._sampleRate=e,this._isUsed=!1,this._nextChorusMode=0,this._ringBuffer=new N(Math.trunc(.006*e)),this._preFilter=new D(e,7237),this._postLeftFilter=new D(e,10644),this._postRightFilter=new D(e,10644),this._dryCurrent=1,this._dryChange=0,this._dryTarget=1,this._lfoValue=0,this._lfoIncrement=.01,this._maxLeftOffset=0,this._averageLeftSamples=0,this._maxRightOffset=0,this._averageRightSamples=0}return a()(t,[{key:"render",value:function(t){this._isUsed=!0;var e=this._dryCurrent;if(0!==this._dryChange&&((e+=this._dryChange)>1?(e=1,this._dryChange=0,this.update(this._nextChorusMode)):e<this._dryTarget&&this._dryChange<0&&(e=this._dryTarget,this._dryChange=0),this._dryCurrent=e),1===e)return this.leftOutput=t,void(this.rightOutput=t);var i=this._lfoValue+this._lfoIncrement;i>1?(i=2-i,this._lfoIncrement=-this._lfoIncrement):i<-1&&(i=-2-i,this._lfoIncrement=-this._lfoIncrement),this._lfoValue=i;var s=t*e,r=1-e,n=this._averageLeftSamples+i*this._maxLeftOffset,a=this._ringBuffer.readSample(n);this.leftOutput=s+this._postLeftFilter.renderLP(a*r);var h=this._averageRightSamples+i*this._maxRightOffset,u=this._ringBuffer.readSample(h);this.rightOutput=s+this._postRightFilter.renderLP(u*r),this._ringBuffer.writeSample(this._preFilter.renderLP(this._applySaturation(t)))}},{key:"reset",value:function(){this._ringBuffer.reset(),this._preFilter.reset(),this._postLeftFilter.reset(),this._postRightFilter.reset(),this._isUsed=!1}},{key:"update",value:function(t){if(this._dryCurrent<1&&!this._isUsed)this._dryChange=5e-4,this._dryTarget=1,this._nextChorusMode=t;else switch(t){case 1:this._updateValues(.513,.44,.00154,.00515,.00151,.0054,!0);break;case 2:this._updateValues(.863,.44,.00154,.00515,.00151,.0054,!0);break;case 3:this._updateValues(9.75,.44,.00322,.00356,.00328,.00365,!1);break;default:this._updateValues(.513,1,.00154,.00515,.00151,.0054,!0),this._ringBuffer.reset()}}},{key:"_applySaturation",value:function(t){return t}},{key:"_updateValues",value:function(t,e,i,s,r,n,a){var h=.5*(i+s),u=s-h;this._averageLeftSamples=h*this._sampleRate,this._maxLeftOffset=u*this._sampleRate;var o=.5*(r+n),c=n-o;this._averageRightSamples=o*this._sampleRate,this._maxRightOffset=c*this._sampleRate*(a?-1:1),this._dryTarget=e,this._isUsed||(this._dryChange=e),this._dryChange=(e-this._dryCurrent)/1e3,this._lfoIncrement=4*Math.sign(this._lfoIncrement)*t/this._sampleRate}}]),t}(),A=i("PJYZ"),B=i.n(A),j=i("iWIM"),z=i.n(j);function W(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,s=v()(t);if(e){var r=v()(this).constructor;i=Reflect.construct(s,arguments,r)}else i=s.apply(this,arguments);return l()(this,i)}}var U=function(t){c()(i,t);var e=W(i);function i(t){var s;return r()(this,i),s=e.call(this,t),_()(B()(s),"isActive",(function(){return!s._env.isFinished()})),s._env=new g,s._env._segments=[s._delay=new b(t),s._attack=new P(t,.03,1,!0),s._release=new k(t,.025,0,!1),s._shutdown=new w(t,.001)],s._release.setDuration(.1),s}return a()(i,[{key:"trigger",value:function(){this.isActive()||(this.currentPhase=1,this.currentValue=0),!this._env.isFinished()&&this._env.isReleased()||this._env.trigger()}},{key:"release",value:function(){this._env.release()}},{key:"shutdown",value:function(){this._env.shutdown()}},{key:"reset",value:function(){z()(v()(i.prototype),"reset",this).call(this),this._env.reset()}},{key:"render",value:function(){if(!this.isActive())return 0;var t=this._env.render();return 0===t?0:t*z()(v()(i.prototype),"render",this).call(this)}},{key:"setValues",value:function(t,e,i){this.setRate(t),this._delay.setDuration(e),this._attack.setDuration(i)}}]),i}(function(){function t(e){r()(this,t),_()(this,"currentPhase",1),_()(this,"currentValue",0),_()(this,"isRestarted",!1),_()(this,"waveform","triangle"),this._oneOverSampleRate=1/e,this._phaseIncrement=0}return a()(t,[{key:"reset",value:function(){this.currentPhase=1,this.currentValue=0}},{key:"render",value:function(){this.isRestarted=!1,this.currentPhase+=this._phaseIncrement,this.currentPhase>1&&(this.isRestarted=!0,this.currentPhase-=1);var t=0;switch(this.waveform){case"none":t=0;break;case"sine":t=Math.sin(2*this.currentPhase*Math.PI);break;case"square":t=this.currentPhase>.5?-1:1;break;case"random":t=this.isRestarted?2*Math.random()-1:this.currentValue;break;case"noise":t=2*Math.random()-1;break;default:(t=4*this.currentPhase)>1&&(t=2-t),t<-1&&(t=-2-t)}return this.currentValue=t}},{key:"setRate",value:function(t){this._phaseIncrement=t*this._oneOverSampleRate}}]),t}()),J=0,G=4,H=function(){function t(e){var i=e.patch,s=e.sampleRate,n=e.polyphony;r()(this,t),this.patch=i,this.sampleRate=s,this.maxVoices=n,this.voices=[],this.status=J,this.parameters=[this.bendAmountParam=new h(0,s),this.dcoBendDepthParam=new h(1,s),this.pitchLfoModDepthParam=new h(0,s),this.pwmDepthParam=new h(0,s),this.sawLevelParam=new h(0,s),this.pulseLevelParam=new h(0,s),this.subLevelParam=new h(0,s),this.noiseLevelParam=new h(0,s),this.filterCutoffParam=new h(0,s),this.filterResonanceParam=new h(0,s),this.filterBendDepthParam=new h(1,s),this.filterEnvModParam=new h(0,s),this.filterLfoModParam=new h(0,s),this.filterKeyModParam=new h(0,s),this.vcaGainFactorParam=new h(0,s)],this.lfo=new U(s),this.lfo.waveform="sine",this.hpf=new D(s),this.chorus=new T(s),this.update()}return a()(t,[{key:"noteOn",value:function(t,e){this.status=G;var i=this.voices.findIndex((function(e){return e.note===t}));if(i>=0)this.voices[i].noteOn(t,e);else{!this.voices.length&&this.patch.lfo.autoTrigger&&this.lfo.trigger();var s=new E({patch:this.patch,sampleRate:this.sampleRate});s.noteOn(t,e),this.voices.length<this.maxVoices?this.voices.push(s):this.voices[0]=s}}},{key:"noteOff",value:function(t){this.voices.forEach((function(e){return e.note===t&&!e.isFinished()&&e.noteOff()}))}},{key:"pitchBend",value:function(t){this.bendAmountParam.setValue(t)}},{key:"lfoTrigger",value:function(){this.lfo.trigger()}},{key:"lfoRelease",value:function(){this.lfo.release()}},{key:"render",value:function(t,e){if(this.status!==J){this.status--,this.voices=this.voices.filter((function(t){return!t.isFinished()})),this.voices.length&&(this.status=G);for(var i=0;i<t.length;i++){var s=this.bendAmountParam.getNextValue(),r=this.dcoBendDepthParam.getNextValue(),n=this.pwmDepthParam.getNextValue(),a=this.pitchLfoModDepthParam.getNextValue(),h=this.sawLevelParam.getNextValue(),u=this.pulseLevelParam.getNextValue(),o=this.subLevelParam.getNextValue(),c=this.noiseLevelParam.getNextValue(),f=this.filterCutoffParam.getNextValue(),l=this.filterResonanceParam.getNextValue(),p=this.filterBendDepthParam.getNextValue(),v=this.filterEnvModParam.getNextValue(),d=this.filterLfoModParam.getNextValue(),_=this.filterKeyModParam.getNextValue(),y=this.vcaGainFactorParam.getNextValue(),m=this.lfo.render(),g=m*a*.25+s*r*7/12,P=this.patch.dco.range;0!==g&&(P*=Math.pow(2,g));for(var k=s*p*4+d*m*3,b=0,w=0;w<this.voices.length;w++){var O=this.voices[w];O.isFinished()||(b+=O.render(m,P,n,h,u,o,c,f,l,v,k,_))}if(this.patch.hpf>0){var V=this.hpf.renderLP(b);this.patch.hpf<.25&&(V*=4*this.patch.hpf),b-=V}b=x(3*(b*=y)),this.chorus.render(b),t[i]=this.chorus.leftOutput,e[i]=this.chorus.rightOutput}if(this.status===J){for(var R=1,S=R/t.length,M=0;M<t.length;M++)t[M]*=R,e[M]*=R,R-=S;this.patch.lfo.autoTrigger&&this.lfo.reset(),this.hpf.reset(),this.chorus.reset();for(var C=0;C<this.parameters.length;C++)this.parameters[C].reset()}}}},{key:"setValue",value:function(t,e){var i=t.split(".");if(i.length){for(var s=this.patch,r=0;r<i.length-1;r++)s=s[i[r]]||(s[i[r]]={});s[i[i.length-1]]=e,this.update()}}},{key:"update",value:function(){for(var t=!1,e=0;e<this.voices.length;e++){var i=this.voices[e];i.updatePatch(this.patch),t=t||!i.isFinished()}var s=this.patch.dco.saw?.2:0,r=this.patch.dco.pulse?.2:0,n=this.patch.dco.sub?.195*this.patch.dco.subAmount:0,a=.21*this.patch.dco.noise,h=s+r+n+a;h>.26&&(r*=h=.26/(.26+.3*(h-.26)),s*=h,n*=h,a*=h),this.sawLevelParam.setValue(s,t),this.pulseLevelParam.setValue(r,t),this.subLevelParam.setValue(n,t),this.noiseLevelParam.setValue(a,t),this.pitchLfoModDepthParam.setValue(this.patch.dco.lfo,t),this.pwmDepthParam.setValue(this.patch.dco.pwm,t);var u,o,c,f,l,p,v=this.patch.vcf.modPositive?1:-1;this.filterCutoffParam.setValue(this.patch.vcf.frequency,t),this.filterResonanceParam.setValue(this.patch.vcf.resonance,t),this.filterEnvModParam.setValue(this.patch.vcf.envMod*v,t),this.filterLfoModParam.setValue(this.patch.vcf.lfoMod,t),this.filterKeyModParam.setValue(this.patch.vcf.keyMod,t),this.chorus.update(this.patch.chorus),u=this.lfo,o=this.patch.lfo.frequency,c=this.patch.lfo.delay,f=O(o,q),l=O(c,K),p=O(c,Y),u.setValues(f,l,p),function(t,e){var i=O(e,Z);t.setCutoff(i)}(this.hpf,this.patch.hpf);var d=.1*Math.pow(1.2589,10*this.patch.vca);this.vcaGainFactorParam.setValue(d,t)}},{key:"panic",value:function(){this.voices=[]}}]),t}(),q=[.3,.85,3.39,11.49,22.22],K=[0,.0639,.85,1.2,2.685],Y=[.001,.053,.188,.348,1.15];var Z=[140,250,520,1220];class X extends AudioWorkletProcessor{constructor(t){super(),this.synth=new H({patch:t.processorOptions.patch,polyphony:t.processorOptions.polyphony,sampleRate:sampleRate||44100}),this.port.onmessage=this.handleMessage.bind(this)}handleMessage(t){"note-on"===t.data.action?this.synth.noteOn(t.data.note,t.data.velocity):"note-off"===t.data.action?this.synth.noteOff(t.data.note):"pitch-bend"===t.data.action?this.synth.pitchBend(t.data.value):"set-param"===t.data.action?this.synth.setValue(t.data.name,t.data.value):"set-patch"===t.data.action?(this.synth.patch=t.data.patchData,this.synth.update()):"lfo-trigger-on"===t.data.action?this.synth.lfoTrigger():"lfo-trigger-off"===t.data.action?this.synth.lfoRelease():"panic"===t.data.action?this.synth.panic():console.log("Unmanaged message",JSON.stringify(t.data))}process(t,e){const i=e[0];return this.synth.render(i[0],i[1]),!0}}registerProcessor("junox-synth",X)},"7W2i":function(t,e,i){var s=i("SksO");t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}},Nsbk:function(t,e){function i(e){return t.exports=i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},i(e)}t.exports=i},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},SksO:function(t,e){function i(e,s){return t.exports=i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},i(e,s)}t.exports=i},W8MJ:function(t,e){function i(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}t.exports=function(t,e,s){return e&&i(t.prototype,e),s&&i(t,s),t}},a1gu:function(t,e,i){var s=i("cDf5"),r=i("PJYZ");t.exports=function(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?r(t):e}},cDf5:function(t,e){function i(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=i=function(t){return typeof t}:t.exports=i=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(e)}t.exports=i},iWIM:function(t,e,i){var s=i("n3AX");function r(e,i,n){return"undefined"!=typeof Reflect&&Reflect.get?t.exports=r=Reflect.get:t.exports=r=function(t,e,i){var r=s(t,e);if(r){var n=Object.getOwnPropertyDescriptor(r,e);return n.get?n.get.call(i):n.value}},r(e,i,n||e)}t.exports=r},lSNA:function(t,e){t.exports=function(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}},lwsE:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},n3AX:function(t,e,i){var s=i("Nsbk");t.exports=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=s(t)););return t}}});
//# sourceMappingURL=1b7cbcc0f8d04c95db54.worklet.js.map