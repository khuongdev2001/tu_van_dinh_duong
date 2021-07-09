<?php if (validation_errors()) { ?>
    <div class="validate-form">
        <?php echo validation_errors(); ?>
    </div>
<?php } ?>
<form method="post" action="<?php echo base_url(); ?>manager/add?table=service">
    <div class="menu-filter filter-add add-user">
        <ul class="" role="tablist">
            <li role="presentation" class="active"><a href="#user-info" aria-controls="user-info"
                                                      role="tab" data-toggle="tab">Thông tin cơ bản</a>
            </li>
        </ul>
    </div>
    <!-- end tab list-->
    <div class="content-add-item">
        <p class="add-title-top">Tạo mới</p>
        <!-- end row-->
        <div class="tab-content">
            <div role="tabpanel" class="tab-pane active" id="user-info">
                <div class="row row-input">
                    <div class="col-xs-2">Tiêu đề<span class="user-error">*</span></div>
                    <div class="col-xs-10">
                        <input type="text" name="title" class="control-input input-user"
                               value="<?php echo $this->input->post('title'); ?>" required/>
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Ảnh đại diện</div>
                    <div class="col-xs-6">
                        <div class="row">
                            <div class="col-xs-8">
                                <input type="text" name="image" id="xFilePath1" class="control-input"
                                       style="width: 100%"
                                       value="<?php echo $this->input->post('image'); ?>" required/>
                            </div>
                            <div class="col-xs-1 box-tooltip-img">
                                <span class="image-tooltip">
                                    <img id="views-image1" class="zoom-image"
                                         src="<?php echo $this->input->post('image'); ?>">
                                </span>
                            </div>
                            <div class="col-xs-3">
                                <button type="button" class="btn-browse"
                                        onclick="openPopup('xFilePath1','views-image1')">Browse...
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Thời gian</div>
                    <div class="col-xs-10">
                        <div class="input-group box-date-filter">
                            <input type="text" data-key="time_1"
                                   value="<?php echo $this->input->post('day_start'); ?>" id="datetimepicker"
                                   class="filter_class_2 form-control input-sm " name="day_start">
                            <span class="input-group-addon">
                                    <span class="glyphicon glyphicon-calendar"></span>
                            </span>
                        </div>
                    </div>
                </div>

                <div class="row row-input">
                    <div class="col-xs-2">Link liên kết</div>
                    <div class="col-xs-10">
                        <input type="text" name="hyperlink" class="control-input input-user"
                               value="<?php echo $this->input->post('hyperlink'); ?>" required/>
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Thứ tự hiển thị</div>
                    <div class="col-xs-10">
                        <div class="row">
                            <div class="col-xs-2">
                                <input type="number" name="order" class="control-input input-user"
                                       value="<?php echo $this->input->post('order'); ?>"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end tab info-->
            <div class="toggle-group">
                <p class="toggle-title toggle-title-up">Địa chỉ</p>
                <div class="toggle-content">
                    <div class="row row-input row-ck">
                        <div class="col-xs-12">
                                <textarea name="excerpt" class="control-input "
                                          style="height: auto"
                                          rows="5"><?php if ($this->input->post('excerpt') != '') {
                                        echo $this->input->post('excerpt');
                                    } else {

                                    } ?></textarea>
                        </div>
                    </div>
                    <!-- end row-->
                </div>
            </div>
            <div class="row row-input">
                <div class="col-xs-2">Kích hoạt</div>
                <div class="col-xs-10">
                    <div class="col-option">
                        <div class="item-on-off user-on-off">
                            <input type="hidden" name="show" value="0"/>
                            <input type="checkbox" name="show"
                                   value="1" checked><label><span></span></label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row text-left">
                <div class="col-xs-2"></div>
                <div class="col-xs-10">
                    <button class="btn btn-primary btn-add" type="submit">Tạo mới</button>
                    <a href="<?php if (isset($_SERVER['HTTP_REFERER'])) {
                        echo $_SERVER['HTTP_REFERER'];
                    } ?>" class="btn btn-default btn-delete">Hủy</a>
                </div>

            </div>
        </div>
        <!-- end tab content-->

    </div>
</form>
<script>
    $(document).ready(function(){
        $('#datetimepicker').datepicker({
            language:'vi',
            clearBtn:true
        });
    })
</script>