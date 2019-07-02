# we.1


mini app demo 


一个span，两个按钮，点击按钮会让span加1或者减1。它简单到你不需要分心关注，但是由足够说明典型的html场景——就是既有数据呈现也有按钮操作。

UI看起来是这样的：

<div id="app">
    <button id="inc">+</button>
    <span id="count">0</span>
    <button id="dec">-</button>  
</div>
	

最低需要的5个文件的内容

	app.json
	index/index.wxml
	index/index.wxss
	index/index.js
	index/index.json

## app.json

	{
	  "pages": [
	    "pages/index/index"
	  ]
	}

##  index/index.wxml

	<view class="container">
	    <button bindtap="inc">+</button>
	    <text>{{count}}</text>
	    <button bindtap="dec">-</button>
	</view>


## index/index.wxss

	.container{
	 display: flex;
	 flex-direction: row;
	 justify-content: flex-start;
	}

## index/index.js

	Page({
	  data: {
	    count:0,
	  },
	  inc: function (e) {
	    this.setData({ count: this.data.count+1})
	  },
	  dec: function (e) {
	    this.setData({count:this.data.count-1})
	  }
	})

##  index/index.json

	{
	  "usingComponents": {}
	}