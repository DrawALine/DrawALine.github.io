window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","testtt":"resource/eui_skins/testtt.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.currentState = "disabled";
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","btn_2_png"),
					new eui.SetProperty("iconDisplay","source","btn_2_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_up_png"),
					new eui.SetProperty("iconDisplay","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5),
					new eui.SetProperty("_Image1","source","button_down_png"),
					new eui.SetProperty("iconDisplay","source","button_up_png")
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_down_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 40;
		t.text = "wefwer";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = -1;
		t.source = "button_up_png";
		t.verticalCenter = 0.5;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skin/BulletSkin.exml'] = window.BulletSkin = (function (_super) {
	__extends(BulletSkin, _super);
	function BulletSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "unShoot";
		this.height = 35;
		this.width = 30;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
		this.states = [
			new eui.State ("unShoot",
				[
					new eui.SetProperty("_Image2","alpha",0),
					new eui.SetProperty("_Image3","alpha",0)
				])
			,
			new eui.State ("shot",
				[
					new eui.SetProperty("_Image1","alpha",0),
					new eui.SetProperty("_Image3","alpha",0)
				])
			,
			new eui.State ("hit",
				[
					new eui.SetProperty("_Image1","alpha",0),
					new eui.SetProperty("_Image2","alpha",0)
				])
		];
	}
	var _proto = BulletSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.height = 33;
		t.source = "bullet_0_png";
		t.width = 26;
		t.x = 2;
		t.y = 0.8;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.source = "bullet_1_png";
		t.x = 2.2;
		t.y = 0.6;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.height = 33;
		t.source = "skull_png";
		t.width = 26;
		t.x = 1.6;
		t.y = 0.4;
		return t;
	};
	return BulletSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skin/Button_0.exml'] = window.Button0 = (function (_super) {
	__extends(Button0, _super);
	function Button0() {
		_super.call(this);
		this.skinParts = ["bg","title","group"];
		
		this.height = 50;
		this.width = 150;
		this.elementsContent = [this.group_i()];
	}
	var _proto = Button0.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.bottom = 5;
		t.left = 2;
		t.right = 5;
		t.scaleX = 1;
		t.top = 4;
		t.elementsContent = [this.bg_i(),this.title_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "btn_2_png";
		t.top = 0;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.anchorOffsetX = 0;
		t.bottom = 5;
		t.left = 3;
		t.right = 0;
		t.text = "Label";
		t.textAlign = "center";
		t.top = 6;
		t.verticalAlign = "middle";
		return t;
	};
	return Button0;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skin/Button_1.exml'] = window.Button1 = (function (_super) {
	__extends(Button1, _super);
	function Button1() {
		_super.call(this);
		this.skinParts = ["bg","title","group"];
		
		this.height = 50;
		this.width = 150;
		this.elementsContent = [this.group_i()];
	}
	var _proto = Button1.prototype;

	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.bottom = 5;
		t.left = 2;
		t.right = 5;
		t.scaleX = 1;
		t.top = 4;
		t.elementsContent = [this.bg_i(),this.title_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = -4;
		t.left = 0;
		t.right = -5;
		t.source = "btn_1_png";
		t.top = -4;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 2;
		t.left = 3;
		t.right = 0;
		t.text = "Label";
		t.textAlign = "center";
		t.top = 1;
		t.verticalAlign = "middle";
		return t;
	};
	return Button1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skin/RoomCreateSkin.exml'] = window.RoomCreateSkin = (function (_super) {
	__extends(RoomCreateSkin, _super);
	function RoomCreateSkin() {
		_super.call(this);
		this.skinParts = ["confirmBtn","cancleBtn","roomInput","passwordInput","nameInput"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.confirmBtn_i(),this.cancleBtn_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this.roomInput_i(),this.passwordInput_i(),this.nameInput_i()];
	}
	var _proto = RoomCreateSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1123.03;
		t.source = "btn_0_png";
		t.width = 632.12;
		t.x = 5.64;
		t.y = 5.85;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 777.12;
		t.source = "btn_1_png";
		t.width = 597.67;
		t.x = 16.54;
		t.y = 206.43;
		return t;
	};
	_proto.confirmBtn_i = function () {
		var t = new UIButtonItem();
		this.confirmBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 95.76;
		t.skinName = "Button0";
		t.width = 268.48;
		t.x = 33.21;
		t.y = 766.24;
		return t;
	};
	_proto.cancleBtn_i = function () {
		var t = new UIButtonItem();
		this.cancleBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 95.76;
		t.skinName = "Button0";
		t.width = 268.48;
		t.x = 330.73;
		t.y = 764.12;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 68.3;
		t.size = 40;
		t.text = "房间ID";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 152.97;
		t.x = 85.79;
		t.y = 355.84;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 69.33;
		t.size = 40;
		t.text = "密码";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 149.45;
		t.x = 85.45;
		t.y = 514.24;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 69.33;
		t.size = 40;
		t.text = "代号";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 149.45;
		t.x = 86.36;
		t.y = 651.52;
		return t;
	};
	_proto.roomInput_i = function () {
		var t = new eui.TextInput();
		this.roomInput = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66;
		t.inputType = "tel";
		t.maxChars = 10;
		t.prompt = "输入房间号";
		t.restrict = "0-9";
		t.rotation = 359.91;
		t.width = 256.91;
		t.x = 266;
		t.y = 355.39;
		return t;
	};
	_proto.passwordInput_i = function () {
		var t = new eui.TextInput();
		this.passwordInput = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.displayAsPassword = true;
		t.height = 74;
		t.inputType = "tel";
		t.maxChars = 10;
		t.prompt = "请输入密码";
		t.restrict = "0-9";
		t.width = 266;
		t.x = 262;
		t.y = 512.24;
		return t;
	};
	_proto.nameInput_i = function () {
		var t = new eui.TextInput();
		this.nameInput = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.displayAsPassword = true;
		t.height = 74;
		t.maxChars = 8;
		t.prompt = "请输入名字代号";
		t.width = 266;
		t.x = 259.88;
		t.y = 649.51;
		return t;
	};
	return RoomCreateSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skin/TipSkin.exml'] = window.TipSkin = (function (_super) {
	__extends(TipSkin, _super);
	function TipSkin() {
		_super.call(this);
		this.skinParts = ["ani","msg","group"];
		
		this.height = 1136;
		this.width = 640;
		this.ani_i();
		this.elementsContent = [this.group_i()];
		
		eui.Binding.$bindProperties(this, ["group"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0.5],[],this._Object1,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [500],[],this._Object2,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, [500],[],this._Object3,"y");
		eui.Binding.$bindProperties(this, [0.3],[],this._Object4,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object4,"y");
	}
	var _proto = TipSkin.prototype;

	_proto.ani_i = function () {
		var t = new egret.tween.TweenGroup();
		this.ani = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i(),this._To3_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 750;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.ease = "sineIn";
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.x = 44;
		t.y = 676;
		t.elementsContent = [this._Image1_i(),this.msg_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.8;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 146;
		t.source = "header_png";
		t.width = 538;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.msg_i = function () {
		var t = new eui.Label();
		this.msg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 136.07;
		t.text = "Label";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 528.54;
		t.x = 2.52;
		t.y = 4.97;
		return t;
	};
	return TipSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skin/UIBgSkin.exml'] = window.UIBgSkin = (function (_super) {
	__extends(UIBgSkin, _super);
	function UIBgSkin() {
		_super.call(this);
		this.skinParts = ["title"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.title_i()];
	}
	var _proto = UIBgSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1136;
		t.source = "bg_png";
		t.width = 320;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 1136;
		t.scaleX = -1;
		t.source = "bg_png";
		t.width = 320;
		t.x = 640;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "title_1_png";
		t.x = 430;
		t.y = 120;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "title_1_png";
		t.x = 213.32;
		t.y = 120;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67.09;
		t.size = 40;
		t.text = "标题";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 190.67;
		t.x = 230.85;
		t.y = 106.91;
		return t;
	};
	return UIBgSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skin/UIBattleSkin.exml'] = window.$exmlClass1 = (function (_super) {
	__extends($exmlClass1, _super);
	function $exmlClass1() {
		_super.call(this);
		this.skinParts = ["bg","bulletList","actionPlayerText","action_0","action_1","action_2","action_3","actionStatusText","exitBtn","otherRoundGroup"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.bg_i(),this._Label1_i(),this.bulletList_i(),this.actionPlayerText_i(),this._Group1_i(),this.otherRoundGroup_i()];
	}
	var _proto = $exmlClass1.prototype;

	_proto.bg_i = function () {
		var t = new UIBgItem();
		this.bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1136;
		t.skinName = "UIBgSkin";
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33;
		t.text = "枪膛状态:";
		t.width = 147;
		t.x = 25;
		t.y = 192;
		return t;
	};
	_proto.bulletList_i = function () {
		var t = new eui.List();
		this.bulletList = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 39;
		t.itemRendererSkinName = BulletSkin;
		t.width = 266.67;
		t.x = 171;
		t.y = 187;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto.actionPlayerText_i = function () {
		var t = new eui.Label();
		this.actionPlayerText = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40.67;
		t.text = "行动方";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 156.67;
		t.x = 451;
		t.y = 187;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 44;
		t.y = 304;
		t.elementsContent = [this.action_0_i(),this.action_1_i(),this.action_2_i(),this.action_3_i()];
		return t;
	};
	_proto.action_0_i = function () {
		var t = new UIButtonItem();
		this.action_0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 134;
		t.skinName = "Button1";
		t.width = 542;
		t.x = 4;
		t.y = 0;
		return t;
	};
	_proto.action_1_i = function () {
		var t = new UIButtonItem();
		this.action_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 134;
		t.skinName = "Button1";
		t.width = 542;
		t.x = 4;
		t.y = 178;
		return t;
	};
	_proto.action_2_i = function () {
		var t = new UIButtonItem();
		this.action_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 134;
		t.skinName = "Button1";
		t.width = 542;
		t.x = 4;
		t.y = 350;
		return t;
	};
	_proto.action_3_i = function () {
		var t = new UIButtonItem();
		this.action_3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 134;
		t.skinName = "Button1";
		t.width = 542;
		t.x = 0;
		t.y = 536;
		return t;
	};
	_proto.otherRoundGroup_i = function () {
		var t = new eui.Group();
		this.otherRoundGroup = t;
		t.x = 53.87;
		t.y = 299.76;
		t.elementsContent = [this._Image1_i(),this.actionStatusText_i(),this.exitBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.9;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 864.84;
		t.source = "bg_1_png";
		t.width = 626.24;
		t.x = -51.51;
		t.y = -60.6;
		return t;
	};
	_proto.actionStatusText_i = function () {
		var t = new eui.Label();
		this.actionStatusText = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 133.03;
		t.size = 60;
		t.text = "等待对方行动";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 477.03;
		t.x = 32.91;
		t.y = 207.94;
		return t;
	};
	_proto.exitBtn_i = function () {
		var t = new UIButtonItem();
		this.exitBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 84;
		t.skinName = "Button0";
		t.width = 272;
		t.x = 132;
		t.y = 470;
		return t;
	};
	return $exmlClass1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skin/UIFinishSkin.exml'] = window.UIFinishSkin = (function (_super) {
	__extends(UIFinishSkin, _super);
	function UIFinishSkin() {
		_super.call(this);
		this.skinParts = ["finishText","confirmBtn","againBtn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.finishText_i(),this.confirmBtn_i(),this.againBtn_i()];
	}
	var _proto = UIFinishSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.8;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1127;
		t.source = "bg_1_png";
		t.width = 634;
		t.x = 2;
		t.y = 4;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 269;
		t.source = "btn_1_png";
		t.width = 553;
		t.x = 36;
		t.y = 446;
		return t;
	};
	_proto.finishText_i = function () {
		var t = new eui.Label();
		this.finishText = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 194;
		t.text = "Label";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 512;
		t.x = 58;
		t.y = 484;
		return t;
	};
	_proto.confirmBtn_i = function () {
		var t = new UIButtonItem();
		this.confirmBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 98;
		t.skinName = "Button0";
		t.width = 330;
		t.x = 150;
		t.y = 826;
		return t;
	};
	_proto.againBtn_i = function () {
		var t = new UIButtonItem();
		this.againBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 98;
		t.skinName = "Button0";
		t.width = 330;
		t.x = 147.88;
		t.y = 963.27;
		return t;
	};
	return UIFinishSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skin/UIInterduceSkin.exml'] = window.UIInterduceSkin = (function (_super) {
	__extends(UIInterduceSkin, _super);
	function UIInterduceSkin() {
		_super.call(this);
		this.skinParts = ["bg","interduceText","scrollerView","scroller","confirmBtn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.bg_i(),this.scroller_i(),this.confirmBtn_i()];
	}
	var _proto = UIInterduceSkin.prototype;

	_proto.bg_i = function () {
		var t = new UIBgItem();
		this.bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1136;
		t.skinName = "UIBgSkin";
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 654.56;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.skinName = "skins.ScrollerSkin";
		t.width = 554.54;
		t.x = 35.88;
		t.y = 212.3;
		t.viewport = this.scrollerView_i();
		return t;
	};
	_proto.scrollerView_i = function () {
		var t = new eui.Group();
		this.scrollerView = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 645.47;
		t.width = 475.76;
		t.elementsContent = [this.interduceText_i()];
		return t;
	};
	_proto.interduceText_i = function () {
		var t = new eui.Label();
		this.interduceText = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 663.33;
		t.lineSpacing = 10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "Label";
		t.width = 546.73;
		t.x = 0.55;
		t.y = 0.28;
		return t;
	};
	_proto.confirmBtn_i = function () {
		var t = new UIButtonItem();
		this.confirmBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 92.73;
		t.skinName = "Button0";
		t.width = 313.94;
		t.x = 151.78;
		t.y = 906.07;
		return t;
	};
	return UIInterduceSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skin/UIMainMenuSkin.exml'] = window.UIMainMenuSkin = (function (_super) {
	__extends(UIMainMenuSkin, _super);
	function UIMainMenuSkin() {
		_super.call(this);
		this.skinParts = ["bg","enterBtn","netBattleBtn","interduceBtn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.bg_i(),this.enterBtn_i(),this.netBattleBtn_i(),this.interduceBtn_i()];
	}
	var _proto = UIMainMenuSkin.prototype;

	_proto.bg_i = function () {
		var t = new UIBgItem();
		this.bg = t;
		t.height = 1136;
		t.skinName = "UIBgSkin";
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.enterBtn_i = function () {
		var t = new UIButtonItem();
		this.enterBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.skinName = "Button0";
		t.width = 248;
		t.x = 204;
		t.y = 334;
		return t;
	};
	_proto.netBattleBtn_i = function () {
		var t = new UIButtonItem();
		this.netBattleBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.skinName = "Button0";
		t.width = 248;
		t.x = 204;
		t.y = 516;
		return t;
	};
	_proto.interduceBtn_i = function () {
		var t = new UIButtonItem();
		this.interduceBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.skinName = "Button0";
		t.width = 248;
		t.x = 206;
		t.y = 700;
		return t;
	};
	return UIMainMenuSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skin/UIMessageSkin.exml'] = window.UIMessageSkin = (function (_super) {
	__extends(UIMessageSkin, _super);
	function UIMessageSkin() {
		_super.call(this);
		this.skinParts = ["bg","messageText","scroller","confirmBtn","guessingWroing","guessingTrue"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.bg_i(),this.scroller_i(),this.confirmBtn_i(),this.guessingWroing_i(),this.guessingTrue_i()];
	}
	var _proto = UIMessageSkin.prototype;

	_proto.bg_i = function () {
		var t = new UIBgItem();
		this.bg = t;
		t.height = 1136;
		t.skinName = "UIBgSkin";
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 522;
		t.width = 502;
		t.x = 56;
		t.y = 204;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 480;
		t.width = 450;
		t.elementsContent = [this.messageText_i()];
		return t;
	};
	_proto.messageText_i = function () {
		var t = new eui.Label();
		this.messageText = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 526;
		t.lineSpacing = 15;
		t.size = 25;
		t.text = "";
		t.width = 498;
		t.x = 2;
		t.y = 0;
		return t;
	};
	_proto.confirmBtn_i = function () {
		var t = new UIButtonItem();
		this.confirmBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 92;
		t.skinName = "Button0";
		t.width = 272;
		t.x = 176;
		t.y = 908;
		return t;
	};
	_proto.guessingWroing_i = function () {
		var t = new UIButtonItem();
		this.guessingWroing = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.skinName = "Button0";
		t.width = 206;
		t.x = 50;
		t.y = 776;
		return t;
	};
	_proto.guessingTrue_i = function () {
		var t = new UIButtonItem();
		this.guessingTrue = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.skinName = "Button0";
		t.width = 206;
		t.x = 354;
		t.y = 780;
		return t;
	};
	return UIMessageSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);