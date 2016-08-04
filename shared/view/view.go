package view

import (
	"net/http"

	"github.com/yosssi/ace"
	proxy "github.com/yosssi/ace-proxy"
)

var options *Options
var p = proxy.New(&ace.Options{
	DynamicReload: true,
	BaseDir:       "templates",
})

type Options struct {
	Layout string
}

func init() {
	options = &Options{Layout: "layouts/base"}
}

func Render(w http.ResponseWriter, template string, data map[string]string) error {

	tpl, err := p.Load(options.Layout, template, nil)
	if err != nil {
		return err
	}

	if err := tpl.Execute(w, data); err != nil {
		return err
	}

	return err
}

func SetLayout(layout string) {
	options.Layout = layout
}
