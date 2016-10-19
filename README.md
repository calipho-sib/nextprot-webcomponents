# nextprot-webcomponents

#### Project draft:
> https://docs.google.com/presentation/d/1CQWA9btnzEy6dZ8y0UpDMb7AISfWsDz6zuCtBX26XoM/edit?ts=57fcbe56#slide=id.p

#### How to develop webcomponents:
> https://docs.google.com/presentation/d/1Eg6A32MBOGXR5ZxE5n0qy5CWsWy5sqcUIoDtG3M-kSc/edit#slide=id.g137e60f59c_0_88

#### Repository structure:
> This is central repository for nextprot UI webcomponents. In order to allow fetching and registration of single webcomponents with bower, the repository was divided into "submodules" using git subtree.
> In summary, master branch contains all webcomponents divided into three categories: core, blocks (building blocks), and molecules.

__Additionally, every component has its own branch (branch name is identical as webcomponent name) and should be referenced separately in bower.json__
__eg. ```"evidence-item": "https://github.com/calipho-sib/nextprot-webcomponents.git#evidence-item""```.__

### License

[GNU General Public License](https://www.gnu.org/licenses/gpl-3.0.en.html)