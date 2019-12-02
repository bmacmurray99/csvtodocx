# csvtodocx
A simple Node package to convert CSV data to docx templates
## CLI Usage
This package currently supports CLI usage only
To use this package on the command line, use the following syntax: 
```
csvtodocx --input=<INPUT FILE> --output=<OUTPUT FILE> --template=<TEMPLATE FILE>
```
This package uses [docx-templates](https://github.com/guigrpa/docx-templates) and 
[creating templates](https://github.com/guigrpa/docx-templates#writing-templates) uses the same 
syntax in the .docx file. 

All templates are passed the variable ```jsonData``` so any templates you make must reference this variable. 
