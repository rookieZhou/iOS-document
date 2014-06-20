###edgesForExtendedLayout ios7新特性_星岚_新浪博客

主要是遇到了iOS7下，在导航栏存在的情况下，视图延伸到NavigationBar的时候十分难看，要保证视图和naviationBar不相互遮挡。可以这样

	if (IOS7_OR_LATER) {
		self.edgesForExtendedLayout = UIRectEdgeNone;
	}
	self.view.backgroundColor = [UIColor redColor];