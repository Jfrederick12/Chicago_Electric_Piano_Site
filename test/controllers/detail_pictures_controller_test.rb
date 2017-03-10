require 'test_helper'

class DetailPicturesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @detail_picture = detail_pictures(:one)
  end

  test "should get index" do
    get detail_pictures_url
    assert_response :success
  end

  test "should get new" do
    get new_detail_picture_url
    assert_response :success
  end

  test "should create detail_picture" do
    assert_difference('DetailPicture.count') do
      post detail_pictures_url, params: { detail_picture: { image_uid: @detail_picture.image_uid, title: @detail_picture.title } }
    end

    assert_redirected_to detail_picture_url(DetailPicture.last)
  end

  test "should show detail_picture" do
    get detail_picture_url(@detail_picture)
    assert_response :success
  end

  test "should get edit" do
    get edit_detail_picture_url(@detail_picture)
    assert_response :success
  end

  test "should update detail_picture" do
    patch detail_picture_url(@detail_picture), params: { detail_picture: { image_uid: @detail_picture.image_uid, title: @detail_picture.title } }
    assert_redirected_to detail_picture_url(@detail_picture)
  end

  test "should destroy detail_picture" do
    assert_difference('DetailPicture.count', -1) do
      delete detail_picture_url(@detail_picture)
    end

    assert_redirected_to detail_pictures_url
  end
end
