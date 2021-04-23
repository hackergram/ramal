import os

if __name__=="__main__":
    mdfiles=os.popen("ls *.md").read().strip().split("\n")
for mdfile in mdfiles:
    os.system("pandoc "+mdfile+" -f markdown -t html -s -o "+mdfile.replace(".md",".html"))
