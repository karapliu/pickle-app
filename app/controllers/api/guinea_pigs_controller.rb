class Api::GuineaPigsController < ApplicationController
  def index
    @guinea_pigs = current_member.guinea_pigs

    render 'api/guinea_pigs/index'
  end

  def show
    @guinea_pig = GuineaPig.find(params[:id])

    if @guinea_pig
      render 'api/guinea_pigs/show'
    else
      render json: ['Guinea Pig does not exist'], status: 404
    end
  end

  def create
    @guinea_pig = GuineaPig.new(guinea_pig_params)
    @guinea_pig.owner_id = current_member.id
    if @guinea_pig.save
      render 'api/guinea_pigs/show'
    else
      render json: @guinea_pig.errors.full_messages, status: 422
    end
  end

  def update
    @guinea_pig = GuineaPig.find(params[:id])

    if @guinea_pig.update(guinea_pig_params)
      render 'api/guinea_pigs/show'
    else
      render json: ['This Guinea Pig does not exist'], status: 404
    end
  end

  def destroy
    @guinea_pig = GuineaPig.find(params[:id])

    if @guinea_pig.destroy
      render 'api/guinea_pigs/show'
    else
      render json: ['This Guinea Pig does not exist'], status: 404
    end
  end

  private

  def guinea_pig_params
    params.require(:guinea_pig).permit(:name, :age, :sex, :photo)
  end
end