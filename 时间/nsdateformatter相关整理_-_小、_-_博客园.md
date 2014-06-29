#NSDateFormatter相关整理 - 小、 - 博客园

场景 [NSDate description] 输出的有年.月.日.点.分，现在只关心它的年月日。
使用 NSDateFormatter 仅仅输出年，月，日

	NSDateFormatter *dateFormatter = [[NSDateFormatter alloc] init];
	//设定时间格式,这里可以设置成自己需要的格式
	// 只输出年月日
	[dateFormatter setDateFormat:@"yyyy-MM-dd"];
	// 仅仅输出年
	[dateFormatter setDateFormat:@"yyyy"];
    // 只输出
	
	//用[NSDate date]可以获取系统当前时间
	NSString *currentDateStr = [dateFormatter stringFromDate:[NSDate date]];
