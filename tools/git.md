# git 常用操作


## 建立本地仓库
	git --git-dir=[repsname] init --bare
## 分支

**删除分支**

1.  删本地

	```
	git branch -[d|D] <the_local_branch>
	```

2.  删远程

	```
	git push origin --delete <the_remote_branch>   // Git v1.5.0 之后
	git push origin :<the_remote_branch>           // Git v1.5.0 之前			
	```
	
**拉取远程分支**


1.

	```
	git checkout --track <remote> <branch name>
		// 远程分支和本地分支名字一样，提交／拉取的时候可以 `git push`/`git pull` 
	```

2.
	```
	git checkout -b <localbranchname>  <remote/branchname>
	eg:
	git checkout -b br-2.1.1.1  origin/br-2.1.2.1
	```

3.
	```
	git fetch <remote/branch>
	gco -b <remote/branch> <branchname>
	```

	
## Submodule 
[Git Submodule 教程](http://www.kafeitu.me/git/2012/03/27/git-submodule.html)

`Git 1.7.11＋`版本建议用`Subtree`
